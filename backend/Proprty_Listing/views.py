from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Advertisement
from .serializers import AdvertisementSerializer

@api_view(['GET', 'POST', 'DELETE'])
def save_advertisement(request, ad_id=None):
    # Handle GET - Retrieve all advertisements or a specific one by ID
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

    # Handle POST - Create a new advertisement
    elif request.method == 'POST':
        serializer = AdvertisementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Advertisement posted successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Handle DELETE - Delete an advertisement by ID
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
