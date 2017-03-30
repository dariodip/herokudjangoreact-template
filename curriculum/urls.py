from django.conf.urls import url
import threading

from . import views

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
]
