from django.http import JsonResponse


def hello_world(request):
    return JsonResponse({'message': 'Hello, World!'})


def get_circle_state(request):
    if request.method == 'GET':
        return JsonResponse({'circles': [False, False, False, False, False]})
    return JsonResponse({'error': 'Invalid request method'}, status=400)


def get_triangle_state(request):
    if request.method == 'GET':
        return JsonResponse({'triangles': [False, False, False, False, False]})
    return JsonResponse({'error': 'Invalid request method'}, status=400)

