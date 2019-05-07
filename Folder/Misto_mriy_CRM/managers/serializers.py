from rest_framework import serializers
from managers.models import Users

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('first_name', 'middle_name', 'last_name')