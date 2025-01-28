from django.http import JsonResponse
from .models import Shape


def hello_world(request):
    return JsonResponse({'message': 'Hello, World!'})


def get_circle_state(request):
    if request.method == 'GET':
        circle_shapes = Shape.objects.filter(shape_type='circle')
        circles_data = [shape.is_active for shape in circle_shapes]
        return JsonResponse({'circles': circles_data})
    return JsonResponse({'error': 'Invalid request method'}, status=400)


def get_triangle_state(request):
    if request.method == 'GET':
        triangle_shapes = Shape.objects.filter(shape_type='triangle')
        triangles_data = [shape.is_active for shape in triangle_shapes]
        return JsonResponse({'triangles': triangles_data})
    return JsonResponse({'error': 'Invalid request method'}, status=400)


def get_square_state(request):
    if request.method == 'GET':
        square_shapes = Shape.objects.filter(shape_type='square')
        squares_data = [shape.is_active for shape in square_shapes]
        return JsonResponse({'squares': squares_data})
    return JsonResponse({'error': 'Invalid request method'}, status=400)
