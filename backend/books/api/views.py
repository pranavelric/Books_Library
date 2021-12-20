from rest_framework import generics, mixins, serializers
from books.models import Book
from .serializers import BookSerializer


class bookAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    resource_name = 'books'
    serializer_class = BookSerializer

    def get_queryset(self):
        return Book.objects.all()

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class bookRudView(generics.RetrieveUpdateDestroyAPIView):
    resource_name = 'books'
    lookup_field = 'id'
    serializer_class = BookSerializer

    def get_queryset(self):
        return Book.objects.all()
