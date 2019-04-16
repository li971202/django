from django.shortcuts import render
# Create your views here.

def index_blog(request):
    return render(request,"blog/index.html")

def share(request):
    return render(request, "blog/work_1.html")


# def index(request):
#     return render(request,"blog/.html")