from django.shortcuts import render
from django.db import transaction
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView
import jwt
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404

# Classes
class ClassAPIView(generics.ListAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassSerializer

    # def get_queryset(self):
    #     # Пример проверки данных
    #     if not self.request.query_params.get('some_param'):
    #         raise ValidationError(detail="Missing required parameter", code=400)
    #     return super().get_queryset()

# Students
class StudentsAPIGet(generics.RetrieveAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializer
    permission_classes = (IsAuthenticated, )
    lookup_field = 'user'

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        obj = get_object_or_404(queryset, user=self.kwargs['user'])
        self.check_object_permissions(self.request, obj)
        return obj

class StudentsAPIUpdate(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializer
    permission_classes = (IsAuthenticated, )
    lookup_field = 'user'

    def get_queryset(self):
      return Students.objects.filter(user=self.kwargs['user'])

    @action(detail=True, methods=['PATCH'])
    def update_student(self, request, user=None):
        try:
            student = self.get_object()
            serializer = self.get_serializer(student, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'Данные успешно обновлены!'}, status=status.HTTP_200_OK)
        except Students.DoesNotExist:
            return Response({'Произошла ошибка!'}, status=status.HTTP_404_NOT_FOUND)

# Users
class UsersAPIPost(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Registration
class Registration(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')

        if User.objects.filter(username=username).exists():
            return Response({'Этот логин уже используется!'}, status=status.HTTP_400_BAD_REQUEST)

        # Вызов метода create из UsersAPIPost
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            request.data["user"] =  user.id

            students_serializer = StudentsSerializer(data=request.data)
            print(request.data)
            if students_serializer.is_valid():
                student = students_serializer.save()
                return Response({'Вы успешно зарегистрировались!'}, status=status.HTTP_200_OK)

            user.delete()
            return Response({'Произошла ошибка!'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'Произошла ошибка!'}, status=status.HTTP_400_BAD_REQUEST)

# Courses
class CourseViewSet(viewsets.ModelViewSet):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer
    # permission_classes = (IsAuthenticated)

# Login
class MyTokenObtainPairView(TokenObtainPairView):
    def post(self, request):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Генерируем токен
        token = serializer.validated_data['access']
        refresh_token = serializer.validated_data['refresh']

        payload = jwt.decode(token, 'django-insecure-*2omla*ar&0r81ptf%t8$k!25)_^zbqk=9_f%#4q-bsfw^x-0o', algorithms=['HS256'])

        # Собираем ответ
        response_data = {
            'access': token,
            'refresh': refresh_token,
            'user': payload.get('user_id'), # Добавляем user_id в ответ
        }
        return Response(response_data, status=200)

