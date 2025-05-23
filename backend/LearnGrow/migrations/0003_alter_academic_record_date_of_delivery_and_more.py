# Generated by Django 5.1.3 on 2024-11-20 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LearnGrow', '0002_alter_academic_record_assessment_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='academic_record',
            name='date_of_delivery',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='academic_record',
            name='solving',
            field=models.FileField(null=True, upload_to='fiels/%Y/%m/%d/'),
        ),
        migrations.AlterField(
            model_name='assessments',
            name='assessment',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5)]),
        ),
        migrations.AlterField(
            model_name='materials',
            name='material',
            field=models.FileField(upload_to='fiels/%Y/%m/%d/'),
        ),
    ]
