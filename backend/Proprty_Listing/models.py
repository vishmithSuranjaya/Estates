from django.db import models

class Advertisement(models.Model):
    ad_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    status = models.BooleanField(default=False)
    price = models.FloatField(blank=True, null=True)
    propertyType = models.CharField(max_length=255, choices=[
        ('House', 'House'),
        ('Apartment', 'Apartment'),
        ('Land', 'Land'),
        ('Commercial', 'Commercial')
    ], default='House')
    location = models.CharField(max_length=255, blank=True, null=True)
    area = models.FloatField(blank=True, null=True)
    bedrooms = models.IntegerField(blank=True, null=True)
    bathrooms = models.IntegerField(blank=True, null=True)
    contactName = models.CharField(max_length=255, blank=True, null=True)
    contactNumber = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.title or 'Untitled Property'
