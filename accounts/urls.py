from django.urls import path, include
from .views import ProfileListView

urlpatterns = [
    path('', ProfileListView.as_view())
]
