from django.urls import path, include
from .views import ProductListView, ProductCreateView

urlpatterns = [
    path('', ProductListView.as_view()),
    path('create/', ProductCreateView.as_view()),
]
