from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Advertisement
from .serializers import AdvertisementSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage

# Function to save advertisement data (using DRF)
@api_view(['POST'])
def save_advertisement(request):
    if request.method == 'POST':
        serializer = AdvertisementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Save the data to the database
            return Response({'message': 'Advertisement posted successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Function to handle file upload
@csrf_exempt
def save_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        file = request.FILES['file']
        file_name = default_storage.save(file.name, file)  # Save the file
        return JsonResponse({'message': 'File uploaded successfully', 'file_name': file_name})
    else:
        return JsonResponse({'error': 'No file provided'}, status=400)
