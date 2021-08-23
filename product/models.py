from django.db import models


# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=150)
    price = models.IntegerField()
    description = models.TextField()

    def __str__(self):
        return self.title
