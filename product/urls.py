from django.urls import path, include
from .views import ProductListView, \
                   ProductCreateView, \
                   ProductDeleteView

urlpatterns = [
    path('', ProductListView.as_view()),
    path('create/', ProductCreateView.as_view()),
    path('<int:pk>/delete/', ProductDeleteView.as_view())
]
