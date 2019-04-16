from django.urls import  path,re_path
from Blog.views import *


urlpatterns =[
    path('blog/', index_blog),
    re_path('^$', index_blog),
    path('share/',share),

]