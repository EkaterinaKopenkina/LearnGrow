# Generated by Django 5.1.3 on 2025-01-29 16:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('LearnGrow', '0005_students_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='students',
            old_name='user_id',
            new_name='user',
        ),
    ]
