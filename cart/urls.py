from django.urls import path, include
from .views import CartListView

urlpatterns = [
    path('', CartListView.as_view())
]

