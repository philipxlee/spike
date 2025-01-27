from django.urls import path
from .views import hello_world, get_circle_state, get_triangle_state, get_square_state

urlpatterns = [
    path('hello/', hello_world),
    path('circles/', get_circle_state, name='get_circle_state'),
    path('squares/', get_square_state, name='get_square_state'),
    path('triangles/', get_triangle_state, name='get_triangle_state')
]
