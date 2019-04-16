from django.urls import  path,re_path
from Tboys.views import *

urlpatterns =[
    path('music/', index_music),
    re_path('^$', index_music),
    path('gengduo/',gengduo),
    path('login/',login),
    path('isCraw',isCraw),
    path('noCraw',noCraw),
    path('regiest/',regiest),
    path('logout/',logout),
    path('nameValid/', nameValid),
    path('auth_code/',auth_code),
    path('iframe/',ifream),
    path('juxing/',juxing),
    path(r'^search/$', search, name='search'),
    path('search',search)
]

handler404=page_not_found
handler500=page_error