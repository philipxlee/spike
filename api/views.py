from django.http import JsonResponse
from .models import Shape


def hello_world(request):
    return JsonResponse({'message': 'Hello, World!'})


def get_circle_state(request):
    if request.method == 'GET':
        # Filter all shapes of type circle
        circle_shapes = Shape.objects.filter(shape_type='circle')
        # Convert them into a list of boolean values
        circles_data = [shape.is_active for shape in circle_shapes]
        return JsonResponse({'circles': circles_data})
    return JsonResponse({'error': 'Invalid request method'}, status=400)


def get_triangle_state(request):
    if request.method == 'GET':
        # Filter all shapes of type triangle
        triangle_shapes = Shape.objects.filter(shape_type='triangle')
        triangles_data = [shape.is_active for shape in triangle_shapes]
        return JsonResponse({'triangles': triangles_data})
    return JsonResponse({'error': 'Invalid request method'}, status=400)


def get_square_state(request):
    if request.method == 'GET':
        # Filter all shapes of type square
        square_shapes = Shape.objects.filter(shape_type='square')
        squares_data = [shape.is_active for shape in square_shapes]
        return JsonResponse({'squares': squares_data})
    return JsonResponse({'error': 'Invalid request method'}, status=400)
