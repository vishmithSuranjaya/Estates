from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import JsonResponse  # Import JsonResponse
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from .models import User
import json

from django.views.decorators.csrf import csrf_exempt


import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password
from .models import User

@csrf_exempt  # You may remove this for production if you are using CSRF tokens
def login_user(request):
    if request.method == 'GET':
        try:
            # Parse the incoming JSON data from the request body
            data = json.loads(request.body)

            # Extract the email and password from the data
            email = data.get('email')
            password = data.get('password')

            # Ensure both email and password are provided
            if not email or not password:
                return JsonResponse({'message': 'Email and password are required.'}, status=400)

            # Authenticate the user using the provided email and password
            try:
                # Try to retrieve the user by email
                user = User.objects.get(email=email)

                # Check the password using Django's password checker
                if check_password(password, user.password):
                    # Prepare user data to send in the response
                    user_data = {
                        'id': user.id,
                        'email': user.email,
                        # 'username': user.username,  # Assuming your User model has a username
                    }

                    # Respond with the user data if the login is successful
                    return JsonResponse({'user': user_data}, status=200)
                else:
                    return JsonResponse({'message': "Error Occured!"}, status=400)

            except User.DoesNotExist:
                # If the user doesn't exist
                return JsonResponse({'message': 'Invalid credentials.'}, status=400)

        except ValueError:
            return JsonResponse({'message': 'Invalid data format.'}, status=400)

    # If not a POST request
    return JsonResponse({'message': 'Invalid request method.'}, status=400)

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        
        # Validate and save the user
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registration successful!'}, status=status.HTTP_201_CREATED)
        
        # Send back validation errors
        return Response({
            'errors': serializer.errors,
            'message': 'Validation failed.'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    # For unsupported request methods
    return Response({"message": "Invalid request method"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
def get_users(request, id=None):
    # Handle GET - Retrieve all advertisements or a specific one by ID
    if request.method == 'GET':
        if id is not None:
            try:
                user = User.objects.get(id=id)
                serializer = UserSerializer(user)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({"error": "Advertisement not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
