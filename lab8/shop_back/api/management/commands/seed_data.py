from django.core.management.base import BaseCommand
from api.models import Category, Product

class Command(BaseCommand):
    help = 'Seed database with sample data'

    def handle(self, *args, **options):
        # Create categories
        electronics = Category.objects.create(name='Electronics')
        clothing = Category.objects.create(name='Clothing')
        books = Category.objects.create(name='Books')
        
        # Create products
        Product.objects.create(
            name='Laptop',
            price=999.99,
            description='High-performance laptop',
            count=10,
            is_active=True,
            category=electronics
        )
        
        Product.objects.create(
            name='T-Shirt',
            price=19.99,
            description='Cotton t-shirt',
            count=50,
            is_active=True,
            category=clothing
        )
        
        Product.objects.create(
            name='Python Programming Book',
            price=49.99,
            description='Learn Python',
            count=25,
            is_active=True,
            category=books
        )
        
        self.stdout.write(self.style.SUCCESS('Sample data created successfully!'))