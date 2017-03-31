from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView

# Create your views here.


class IndexView(TemplateView):
    template_name = "myapp/index.html"
