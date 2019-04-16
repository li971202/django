from django.shortcuts import render
# Create your views here.

def resume(request):
    return render(request,"resume/resume.html")

def index(request):
    return render(request,"resume/demo5.html")

