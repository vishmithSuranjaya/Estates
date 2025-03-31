from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Advertisement
from .serializers import AdvertisementSerializer
from django.shortcuts import get_object_or_404
from django.core.exceptions import ObjectDoesNotExist

@api_view(['GET', 'POST', 'DELETE'])
def save_advertisement(request, ad_id=None):
    if request.method == 'GET':
        if ad_id is not None:
            try:
                ad = Advertisement.objects.get(id=ad_id)
                serializer = AdvertisementSerializer(ad)   
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Advertisement.DoesNotExist:
                return Response({"error": "Advertisement not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            ads = Advertisement.objects.all()
            serializer = AdvertisementSerializer(ads, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = AdvertisementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Advertisement posted successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        if ad_id is None:
            return Response({'error': 'Ad ID is missing'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            advertisement = Advertisement.objects.get(id=ad_id)
            advertisement.delete()
            return Response({'message': 'Advertisement deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        except Advertisement.DoesNotExist:
            return Response({'error': 'Advertisement not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
             
@api_view(['GET', 'POST', 'DELETE'])
def view_advertisement(request, ad_id=None):
    if request.method == 'GET':
        if ad_id is not None:
            try:
                ad = Advertisement.objects.get(id=ad_id, status=False)
                serializer = AdvertisementSerializer(ad)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except ObjectDoesNotExist:
                return Response({"error": "Advertisement not found or inactive"}, status=status.HTTP_404_NOT_FOUND)
        else:
            ads = Advertisement.objects.filter(status=False)  # Filter active ads only
            serializer = AdvertisementSerializer(ads, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = AdvertisementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Advertisement posted successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        if ad_id is None:
            return Response({'error': 'Ad ID is missing'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            advertisement = Advertisement.objects.get(id=ad_id)
            advertisement.delete()
            return Response({'message': 'Advertisement deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        except ObjectDoesNotExist:
            return Response({'error': 'Advertisement not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)      
        
@api_view(['POST'])
def getActionForAdd(request):
    if request.method == 'POST':
        data = request.data
        addId = data.get('addId')
        action = data.get('action')

        if addId is None or action is None:
            return Response(
                {"message": "Both 'Add Id' and 'action' fields are required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            advertisement = get_object_or_404(Advertisement, ad_id=addId)
            advertisement.status = action
            advertisement.save()

            return Response(
                {"message": f"advertisement status updated successfully to {action}."},
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
