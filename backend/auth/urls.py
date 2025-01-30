# from django.urls import url,path
# # from .views import save_advertisement

# # urlpatterns = [
# #     path('Proprty_Listing/save_advertisement/',save_advertisement),
# # ]

# from Proprty_Listing import views
# urlpatterns = [
#     path(r'^advertisement$',views.advertisementApi)
# ]

from django.urls import path
from . import views

urlpatterns = [
    # path('Register/', views.Register, name='Register'),

]
