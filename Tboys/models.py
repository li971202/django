from django.db import models

# Create your models here.
class UserInfo(models.Model):
    firstname=models.CharField(max_length=32)
    lastname=models.CharField(max_length=32)
    email=models.EmailField()
    password=models.CharField(max_length=32)

    def __str__(self):
        return self.firstname