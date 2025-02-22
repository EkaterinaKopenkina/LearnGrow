from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = ('id', 'title')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class StudentsSerializer(serializers.ModelSerializer):
    #user = UserSerializer() 
    
    class Meta:
        model = Students
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.lastname = validated_data.get('lastname', instance.lastname)
        instance.name = validated_data.get('name', instance.name)
        instance.email = validated_data.get('email', instance.email)
        instance.login = validated_data.get('login', instance.login)
        instance.user.username = validated_data.get('login', instance.login)
        instance.user.email = validated_data.get('email', instance.email)
        instance.save()
        instance.user.save()
        return instance

class TeachersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teachers
        fields = ('id', 'lastname')

class CoursesSerializer(serializers.ModelSerializer):
    teacher = TeachersSerializer(read_only=True)

    class Meta:
        model = Courses
        fields = ('id', 'title', 'description', 'teacher')

# class LessonsSerializer(serializers.ModelSerializer):
#     course = CoursesSerializer(read_only=True)

#     class Meta:
#         model = Courses
#         fields = ('id', 'title')