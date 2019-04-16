# Create your views here.
from django.shortcuts import render,HttpResponseRedirect,render_to_response,redirect,get_object_or_404
from Tboys.models import *
from django.http import JsonResponse,HttpResponse
import hashlib,time,random,io,json,requests
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from django.utils.http import urlquote
from Tboys.UA import *

#   返回脚本的路径         输入的是 __file__是真正的当前文件的绝对路径
# BASE_DIR = dirname(dirname(abspath(__file__)))


lxcsdn = ["https://blog.csdn.net/weixin_43582101/column/info/33034",
          "https://blog.csdn.net/weixin_43582101/article/details/86563910",
          "https://blog.csdn.net/weixin_43582101/article/details/86567367",
          "https://blog.csdn.net/weixin_43582101/article/details/86581852",
          "https://blog.csdn.net/weixin_43582101/article/details/86600298",
          "https://blog.csdn.net/weixin_43582101/article/details/86619034",
          "https://blog.csdn.net/weixin_43582101/article/details/86634542",
          "https://blog.csdn.net/weixin_43582101/article/details/88075275"
          ]
'''设置请求头和访问间隔'''
ips = [None]      #存储客户端最后一次访问的ip地址   空列表也是列表，None类型只有None一个值
## ips=[None] 为了防止 list index out of range。
last = 0           #存储客服端最后一次访问时间
def isCraw(func):
    def wrapper(*args,**kwargs):
        global ips,last       #声明全局变量
               #request.META 是一个字典,包含了所有本次HTTP请求的Header信息
        agent = args[0].META.get('HTTP_USER_AGENT') #获取请求头部信息
        if 'Mozilla' not in agent and 'Safari' not in agent and 'Chrome'not in agent:
            return HttpResponse(random.choice(lxcsdn))
        else:
            ip = args[0].META.get('REMOTE_ADDR') #客户端IP地址
# 什么是remote_addr:
# remote_addr 是服务端根据请求TCP包的ip指定的。假设从client到server中间没有任何代理，
# 那么web服务器（Nginx，Apache等）就会把client的IP设为IPremote_addr；
# 如果存在代理转发HTTP请求，web服务器会把最后一次代理服务器的IP设置为remote_addr
            now = time.time()
            if ip==ips[0] and now-last<2:            #为了防止误伤
                return HttpResponse("Are you curious about what happened? If you read this sentence carefully, you will know what happened."
                                    "Nothing really happened, but what do you think happened"
                                    "In fact, I set the anti-crawler you can not enter, ha ha ha"
                                    "so the page is not found , But is you didn't find it ! " )
            last = now
            ips.pop()
            ips.append(ip)
            return func(*args,**kwargs)
    return wrapper


'''请求头和频率'''
ipss = [None]
lasts = 0
def noCraw(func):
    def wrappers(*args,**kwargs):
        global ipss,lasts
        agent = args[0].META.get('HTTP_USER_AGENT')
        if 'Mozilla' not in agent and 'Safari' not in agent and 'Chrome'not in agent:
            return HttpResponse(random.choice(lxcsdn))
        else:
            ip1 = args[0].META.get('REMOTE_ADDR')
            nows = time.time()
            if ip1==ipss[0] and nows-lasts<2:
                return HttpResponse("Are you curious about what happened? If you read this sentence carefully, you will know what happened."
                                    "Nothing really happened, but what do you think happened"
                                    "In fact, I set the anti-crawler you can not enter, ha ha ha"
                                    "so the page is not found , But is you didn't find it ! " )
            lasts = nows
            ipss.pop()
            ipss.append(ip1)
            return func(*args,**kwargs)
    return wrappers



'''设置cookie，session'''
def loginValid(fun):
    def inner(request,*args,**kwargs):
        cookie=request.COOKIES
        user = UserInfo.objects.filter(firstname = cookie.get("firstName")).first()
        username = request.session.get('firstName')
        if user and username:
            return fun(request,*args,**kwargs)
        else:
            return HttpResponseRedirect("/music/login/")
    return inner



'''移除cookie,session'''
def logout(request):
    username = request.COOKIES.get("firstName")
    if username:
        response = HttpResponseRedirect("/")
        response.delete_cookie("firstName")
        del request.session["firstName"]
        return response
    else:
        return HttpResponseRedirect("/")


'''设置验证码'''
def auth_code(request):
    size = (143,40)
    width,height = size
    font_list = list("abcdefghklmpqrstuvwxyz*#%0123456789")
    c_chars = " ".join(random.sample(font_list,5))
    request.session['auth'] = c_chars.replace(' ','')
    img = Image.new("RGB",size,(30,31,42))
    draw = ImageDraw.Draw(img)

    # for i in range(random.randint(1,7)):
    #     draw.line(
    #         [
    #             (random.randint(0, 150), random.randint(0, 150)),
    #             (random.randint(0, 150), random.randint(0, 150))
    #         ],
    #         fill=(0, 0, 0)
    #     )
    # for j in range(1000):
    #     draw.point(
    #         (    random.randint(0, 150),
    #              random.randint(0, 150)
    #         ),
    #         fill = (0, 0, 0)
    #     )
    # font = ImageFont.load_default().font
    font = ImageFont.truetype("arial.ttf", 23)
    draw.text((5,4),c_chars,font=font,fill="white")
    params = [1 - float(random.randint(1, 2)) / 100,
              0,
              0,
              0,
              1 - float(random.randint(1, 10)) / 100,
              float(random.randint(1, 2)) / 500,
              0.001,
              float(random.randint(1, 2)) / 500
              ]
    img = img.transform(size, Image.PERSPECTIVE, params)
    img = img.filter(ImageFilter.EDGE_ENHANCE_MORE)
    buf = io.BytesIO()

    # nowtime = time.time()
    img.save(buf,'png')
    return HttpResponse(buf.getvalue(),)



'''加密'''
def getPassword(password):
    md5=hashlib.md5()
    md5.update(password.encode())
    result=md5.hexdigest()
    return result



'''主页'''
@isCraw
@loginValid
def index_music(request):
    return render_to_response("tboys/listen.html",locals())


@loginValid
def ifream(request):
    return render_to_response('tboys/iframe.html')


@loginValid
def juxing(request):
    return render_to_response('tboys/juxing.html')


'''登录'''
@noCraw
def login(request):
    pojieba = getPassword(getPassword(str(random.random()))[15:-5])[2:10]
    if request.method=="POST" and request.POST:
        name=request.POST.get("firstName")
        inpassword = getPassword(getPassword(getPassword(getPassword(getPassword(request.POST.get("inputPassword"))))))
        user=UserInfo.objects.filter(firstname=name)
        if user :
            mypass=user[0].password
            if inpassword == mypass:
                yanzhengma = request.POST.get("auth")
                if yanzhengma == request.session['auth']:
                    response = HttpResponseRedirect("/music/")
                    response.set_cookie("firstName",user[0].firstname)
                    request.session['firstName'] = user[0].lastname
                    response.set_cookie("id", user[0].id,max_age=0.6)
                    response.set_cookie("lixi",getPassword(str(time.time())))
                    response.set_cookie(getPassword(urlquote("你好")),getPassword(urlquote("公正法治民主")))
                    response.set_cookie((urlquote("아니카시유")),(urlquote("아니카시유아니카시유")))
                    response.set_cookie(("EC68IU98OUG90"), ("EC9584EB8B9EC9CA0"))
                    response.set_cookie((urlquote("แอนนิก้า ( ทางทิศตะวันตก")),(urlquote("แอนนิก้า ( ทางทิศตะวันตก")))
                                #通过url编码方式隐藏cookie
                    look = '密码正确'
                    return response
                else:
                    look= '验证码错误'
                    return render_to_response('tboys/login.html', locals())
            else:
                look = '密码错误'
                return render_to_response('tboys/login.html', locals())
        else:
            look = '用户不存在'
            # return HttpResponseRedirect('/music/regiest/')
    return render(request,'tboys/login.html',locals())


'''账号验证'''
def nameValid(request):
    if request.method=="GET" and request.GET:
        name=request.GET.get("firstName")   #获取ajax提交的用户名
        if not name.isspace() and name:
            user=UserInfo.objects.filter(firstname=name)
            if user :
                return JsonResponse({"result":"F"})
            else:
                return JsonResponse({"result":"T"})
        else:
            return JsonResponse({"result":"C"})


'''注册'''
def regiest(request):
    if request.method == "POST" and request.POST:
        firstName = request.POST.get("firstName")
        lastName = request.POST.get("lastName")
        inputEmail = request.POST.get("inputEmail")
        inputPassword = request.POST.get("inputPassword")
        confirmPassword = request.POST.get("confirmPassword")
        user = UserInfo()
        user.firstname = firstName
        user.lastname = lastName
        user.email = inputEmail
        user.password = getPassword(getPassword(getPassword(getPassword(getPassword(inputPassword)))))
        user.save()
        return HttpResponseRedirect("/music/login/")
    return render(request,"tboys/regiest.html", locals())



@loginValid
def gengduo(request):
    return render_to_response('tboys/gengduo.html')


@loginValid
def page_not_found(request):
    return render_to_response('tboys/page_not_found.html')



@loginValid
def page_error(request):
    return render_to_response('tboys/page_error.html')



import re
@loginValid
def search(request):
    kw = request.GET.get('kw')
    # kw="像我这样的人"
    base_url = "https://api.bzqll.com/music/netease/search?key=579621905&s={}&type=song&limit=15&offset=0"
    req_url = base_url.format(kw)
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"}

    try:
        req_content = requests.get(req_url, headers=headers).content.decode('utf-8')
        time.sleep(1)
        items = json.loads(req_content)
        data_list = items["data"]
        id = data_list[0]["id"]
        name = data_list[0]["name"]
        singer = data_list[0]["singer"]
        pic = "https" + data_list[0]["pic"][4:]
        lrc = data_list[0]["lrc"]
        lrc_content =requests.get(lrc,headers=headers).content.decode('utf-8')
        kong = re.findall('\[.*?\]',lrc_content)
        for k in kong:
            lrc_content=lrc_content.replace(k,'\n')
        geci = lrc_content
        song_baseurl = "https://api.bzqll.com/music/netease/url?key=579621905&id={}&br=999000"
        song_url = song_baseurl.format(id)
        content = (requests.get(song_baseurl,headers=headers).content.decode('utf-8'))
        if re.findall('502 Bad Gateway',content,re.S):
            search(request)
        return render(request, 'tboys/search.html', locals())
    except:
        name = "暂时没有匹配到歌曲或版权不够"
        singer = " 请再次尝试或重新搜索"
        return render(request, 'tboys/search.html', locals())
# def search(request):
#     kw = request.GET.get('kw')
#     # kw="像我这样的人"
#     base_url = "https://api.bzqll.com/music/netease/search?key=579621905&s={}&type=song&limit=15&offset=0"
#     req_url = base_url.format(kw)
#     headers = {
#         "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"}
#     time.sleep(1)
#     try:
#         req_content = requests.get(req_url, headers=UserAgent()).content.decode('utf-8')
#         items = json.loads(req_content)
#         data_list = items["data"]
#         id = data_list[0]["id"]
#         name = data_list[0]["name"]
#         singer = data_list[0]["singer"]
#         pic = "https" + data_list[0]["pic"][4:]
#         lrc = data_list[0]["lrc"]
#         lrc_content =requests.get(lrc,headers=headers).content.decode('utf-8')
#         kong = re.findall('\[.*?\]',lrc_content)
#         for k in kong:
#             lrc_content=lrc_content.replace(k,'\n')
#         geci = lrc_content
#         if name==None and not name:
#             name="没有匹配到歌曲"
#             singer=None
#         song_baseurl = "https://api.bzqll.com/music/netease/url?key=579621905&id={}&br=999000"
#         song_url = song_baseurl.format(id)
#         return render(request, 'tboys/search.html', locals())
#     except:
#         name = "没有匹配到歌曲"
#         singer = "请重新搜索"
#         return render(request, 'tboys/search.html', locals())