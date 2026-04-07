from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views
from .views import ProductListAPIView, ProductDetailAPIView, CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView

# ViewSets from Lab 9
# router = DefaultRouter()
# router.register(r'categories', views.CategoryViewSet, basename='category')
# router.register(r'products', views.ProductViewSet, basename='product')

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),
    
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),
]

# urlpatterns = [
#     path('', include(router.urls)),
# ]