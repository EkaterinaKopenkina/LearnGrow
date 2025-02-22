from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from LearnGrow.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/classes/', ClassAPIView.as_view()),
    path('api/students/', Registration.as_view()),
    path('api/students/<int:user>/', StudentsAPIGet.as_view()),
    path('api/studentsUpdate/<int:user>/', StudentsAPIUpdate.as_view({'patch': 'partial_update'})),
    path('api/courses/', CourseViewSet.as_view({'get': 'list'})),
    path('api/courses/<int:pk>/', CourseViewSet.as_view({'get': 'retrieve'})),

    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    re_path(r'^.*$', TemplateView.as_view(template_name='index.html'), name='home'),
    #path('', include('django_nextjs.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)