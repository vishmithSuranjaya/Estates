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

from django.shortcuts import get_object_or_404
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password
from .models import User

from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer


@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return JsonResponse({'message': 'Email and password are required.'}, status=400)

            try:
                user = User.objects.get(email=email)

                if user.status:
                    return JsonResponse({'message': 'Your account is disabled. Please contact support.'}, status=403)

                if check_password(password, user.password):
                    user_data = {
                        'id': user.id,
                        'email': user.email,
                        'userType':user.userType
                    }
                    return JsonResponse({'user': user_data}, status=200)

                return JsonResponse({'message': 'Invalid credentials.'}, status=400)

            except User.DoesNotExist:
                return JsonResponse({'message': 'Invalid credentials.'}, status=400)

        except ValueError:
            return JsonResponse({'message': 'Invalid data format.'}, status=400)

    return JsonResponse({'message': 'Invalid request method.'}, status=405)

from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        data = request.data.copy()  # ✅ Make a mutable copy of request data
        if 'password' in data:
            data['password'] = make_password(data['password'])  # ✅ Hash the password before saving

        serializer = UserSerializer(data=data)  # ✅ Use modified data

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registration successful!'}, status=status.HTTP_201_CREATED)

        return Response({'errors': serializer.errors, 'message': 'Validation failed.'}, status=status.HTTP_400_BAD_REQUEST)

    return Response({"message": "Invalid request method"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
def get_users(request, id=None):
    if request.method == 'GET':
        if id is not None:
            # Fetch specific user by ID
            try:
                user = User.objects.get(id=id)
                serializer = UserSerializer(user)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
#raees
@api_view(['POST'])
def getActionToUser(request):
    if request.method == 'POST':
        data = request.data
        email = data.get('email')
        action = data.get('action')

        if email is None or action is None:
            return Response(
                {"message": "Both 'email' and 'action' fields are required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            user = get_object_or_404(User, email=email)
            user.status = action
            user.save()

            return Response(
                {"message": f"User status updated successfully to {action}."},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"message": f"Failed to update status: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    else:
        return Response(
        {"message": "Invalid request method."},
        status=status.HTTP_405_METHOD_NOT_ALLOWED
        )