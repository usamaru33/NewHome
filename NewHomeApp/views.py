from django.shortcuts import render
from django.views import generic
from NewHomeApp.models import Users

class UserListView(generic.ListView):
    model = Users
    template_name = 'user_list.html'
    context_object_name = 'users'

