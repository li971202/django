from django.urls import  path,re_path
from Resume.views import *

urlpatterns =[
    path('resume/', resume),
    re_path('^$', resume),

]