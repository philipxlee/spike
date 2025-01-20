from django.http import HttpResponse
from django.contrib import admin
from django.urls import path, include

def home(request):
    return HttpResponse("Welcome to the home page!")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home, name="home"),
    path('api/', include('api.urls')),
]
