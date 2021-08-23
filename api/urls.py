from django.urls import path, include

app_name = 'api_v1'

urlpatterns = [
    # path('accounts/', include('accounts.urls')),
    path('cart/', include('cart.urls')),
    path('product/', include('product.urls')),
    path('wishlist/', include('wishlist.urls')),
]
