from .views import bookAPIView, bookRudView
from django.urls import path

urlpatterns = [
    path('', bookAPIView.as_view(), name='book-create'),
    path('/<int:id>', bookRudView.as_view(), name="book-rud")
]
