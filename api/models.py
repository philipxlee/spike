from django.db import models


class Shape(models.Model):
    SHAPE_CHOICES = (
        ('circle', 'Circle'),
        ('triangle', 'Triangle'),
        ('square', 'Square'),
    )

    shape_type = models.CharField(max_length=20, choices=SHAPE_CHOICES)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.shape_type} (active: {self.is_active})"
