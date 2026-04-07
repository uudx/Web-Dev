from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views
from .views import ProductListAPIView, ProductDetailAPIView, CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView

# If using ViewSets from Lab 9, comment them out
# router = DefaultRouter()
# router.register(r'categories', views.CategoryViewSet, basename='category')
# router.register(r'products', views.ProductViewSet, basename='product')

urlpatterns = [
    # Product endpoints
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),
    
    # Category endpoints
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),
]

# If using ViewSets, use this instead:
# urlpatterns = [
#     path('', include(router.urls)),
# ]