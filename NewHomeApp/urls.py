from django.contrib import admin
from django.urls import path
from NewHomeApp.views import UserListView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', UserListView.as_view(), name='user'), #ルートにアクセスしたらuser_list.htmlにアクセスする
]

