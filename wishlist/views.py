from django.shortcuts import render
from rest_framework import generics
from .models import WishList
from .serializers import WishListSerializer


# Create your views here.
class WishListListView(generics.ListAPIView):
    queryset = WishList.objects.all()
    serializer_class = WishListSerializer
