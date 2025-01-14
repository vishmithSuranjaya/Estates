from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .models import Advertisement
from .serializers import AdvertisementSerializer

@api_view(['GET', 'POST'])
def save_advertisement(request, ad_id=0):
    # To retrieve all advertisements
    if request.method == 'GET':
        ads = Advertisement.objects.all()
        serializer = AdvertisementSerializer(ads, many=True)
        return Response(serializer.data)

    # To create a new advertisement (POST)
    elif request.method == 'POST':
        serializer = AdvertisementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Advertisement posted successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # # # To delete an advertisement by ad_id (DELETE)
    # elif request.method == 'DELETE':
    #     if ad_id is not None:
    #         try:
    #             # Find the ad by ad_id and delete it
    #             ad = Advertisement.objects.get(id=ad_id)
    #             ad.delete()
    #             return Response({'message': 'Advertisement deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    #         except Advertisement.DoesNotExist:
    #             return Response({'error': 'Advertisement not found'}, status=status.HTTP_404_NOT_FOUND)
    #     else:
    #         return Response({'error': 'Ad ID not provided'}, status=status.HTTP_400_BAD_REQUEST)



@api_view(['DELETE'])
def delete_advertisement(ad_id):
    print(ad_id)
    if ad_id is not None:
        try:
            ad = Advertisement.objects.get(id=ad_id)
            ad.delete()
            return Response({'message': 'Advertisement deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        except Advertisement.DoesNotExist:
                return Response({'error': 'Advertisement not found'}, status=status.HTTP_404_NOT_FOUND)
    else:
            return Response({'error': 'Ad ID not provided'}, status=status.HTTP_400_BAD_REQUEST)