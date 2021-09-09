from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.ProductListView.as_view()),
    path('<int:pk>/', views.ProductDetailView.as_view()),
    path('create/', views.ProductCreateView.as_view()),
    path('<int:pk>/delete/', views.ProductDeleteView.as_view())
]
