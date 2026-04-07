from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer

class ProductListAPIView(generics.ListCreateAPIView):
    """Handle GET (list all) and POST (create)"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """Handle GET, PUT, DELETE for a single product"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

class CategoryListAPIView(generics.ListCreateAPIView):
    """Handle GET (list all) and POST (create) for categories"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """Handle GET, PUT, DELETE for a single category"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'

class CategoryProductsAPIView(APIView):
    """Custom view for /categories/<id>/products/"""
    
    def get(self, request, category_id):
        try:
            category = Category.objects.get(id=category_id)
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=404)
        
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)