from django.conf.urls import url
import threading

from . import views

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
]


def timer():
    threading.Timer(20.0 * 60, timer).start()
    print("I cannot sleep")


timer()
