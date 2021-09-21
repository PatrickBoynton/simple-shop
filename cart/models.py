from django.db import models


# Create your models here.
class Cart(models.Model):
    product = models.ForeignKey('product.Product',
                                on_delete=models.CASCADE,
                                blank=True,
                                null=True)

    total_amount = models.DecimalField(max_digits=4,
                                       decimal_places=2,
                                       blank=True,
                                       null=True)

    def __str__(self):
        return self.product
