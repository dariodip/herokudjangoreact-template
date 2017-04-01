from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView

# Create your views here.


class IndexView(TemplateView):
    template_name = "myapp/index.html"
    title = 'Your title'

    def get_context_data(self, **kwargs):
        props = {
            'example_list': [
                {'key': 'value1'},
                {'key': 'value2'},
            ]
        }
        context = super(IndexView, self).get_context_data(**kwargs)
        context['title'] = self.title
        context['props'] = props
        return context
