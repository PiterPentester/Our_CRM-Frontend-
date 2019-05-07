from django.db import models

# Create your models here.
class Users(models.Model):
    first_name = models.CharField(max_length=32)
    middle_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    phone = models.CharField(max_length=10)
    mail = models.CharField(max_length=32)
    
class Type_Contact(models.Model):
    name = models.CharField(max_length=36)

class Type_Advetising(models.Model):
    name = models.CharField(max_length=32)

class Manager(models.Model):
    first_name = models.CharField(max_length=32)
    middle_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    phone = models.CharField(max_length=10)
    
class Order(models.Model):
    id_quartal = models.IntegerField()
    section = models.IntegerField()
    floor = models.IntegerField()
    flat = models.IntegerField()
    userid = models.IntegerField()
