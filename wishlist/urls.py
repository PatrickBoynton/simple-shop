from django.urls import path, include
from .views import WishListListView

urlpatterns = [
    path('', WishListListView.as_view())
]

