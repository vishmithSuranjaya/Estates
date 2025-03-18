from rest_framework import serializers
from Proprty_Listing.models import Advertisement

class AdvertisementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advertisement
        fields='__all__'