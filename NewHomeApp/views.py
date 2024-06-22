from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from django.views import generic
from django.contrib import messages
from NewHomeApp.models import NewHomeApp

class UserListView(generic.ListView):
    model = NewHomeApp
    template_name = 'NewHome.html'
    context_object_name = 'users'

# ログイン後に表示するページ
    def edit_page(request):
        return render(request, 'Edit.html')

# ログイン時に表示するページとログイン機能
    def login_view(request):
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            # ユーザー認証
            user = authenticate(request, username=username, password=password)

            if user is not None:
                # ログイン成功
                auth_login(request, user)
                return redirect('edit')
            else:
            # ログイン失敗
                messages.error(request, 'ユーザー名またはパスワードが間違っています。')

        return render(request, 'login')