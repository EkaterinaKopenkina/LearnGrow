from django.db import models
from django.contrib.auth.models import User

ASSESSMENTS_CHOICES = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
}

class Subjects(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Statuses(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Classes(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Assessments(models.Model):
    assessment = models.IntegerField(choices=ASSESSMENTS_CHOICES)

    def __str__(self):
        return self.assessment

class Teachers(models.Model):
    lastname = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    patronymic = models.CharField(max_length=255, null=True)
    email = models.EmailField(max_length=255)
    photo = models.ImageField(upload_to="photos/%Y/%m/%d/", null=True)
    login = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    time_registration = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.lastname

class Courses(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="photos/%Y/%m/%d/", null=True)
    subject = models.ForeignKey(Subjects, on_delete=models.PROTECT)
    teacher = models.ForeignKey(Teachers, on_delete=models.PROTECT)

    def __str__(self):
        return self.title

class Lessons(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    video = models.FileField(upload_to="videos/%Y/%m/%d/", null=True)
    course = models.ForeignKey(Courses, on_delete=models.PROTECT)

    def __str__(self):
        return self.title

class Materials(models.Model):
    material = models.FileField(upload_to="fiels/%Y/%m/%d/")
    lesson = models.ForeignKey(Lessons, on_delete=models.PROTECT)

    def __str__(self):
        return self.material

class Tasks(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    deadline = models.DateTimeField()
    lesson = models.ForeignKey(Lessons, on_delete=models.PROTECT)

    def __str__(self):
        return self.title

class Images_for_tasks(models.Model):
    image = models.ImageField(upload_to="photos/%Y/%m/%d/")
    task = models.ForeignKey(Tasks, on_delete=models.PROTECT)

    def __str__(self):
        return self.image

class Students(models.Model):
    lastname = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    login = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    time_registration = models.DateTimeField(auto_now_add=True)
    class_id = models.ForeignKey(Classes, on_delete=models.PROTECT)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.lastname

class Academic_record(models.Model):
    remark = models.TextField(null=True)
    solving = models.FileField(null=True, upload_to="fiels/%Y/%m/%d/")
    date_of_delivery = models.DateTimeField(null=True)
    status = models.ForeignKey(Statuses, on_delete=models.PROTECT)
    student = models.ForeignKey(Students, on_delete=models.PROTECT)
    assessment = models.ForeignKey(Assessments, on_delete=models.PROTECT, default=1)
    task = models.ForeignKey(Tasks, on_delete=models.PROTECT)