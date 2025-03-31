from django.urls import path
from . import views

urlpatterns = [
     path('login_user/', views.login_user, name="login"),
     path('register_user/',views.register_user, name="register"),
     path('get_users/',views.get_users, name="get_users"),
     path('getAction/',views.getActionToUser)#raees
]
