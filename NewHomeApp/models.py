from django.db import models

class NewHomeApp(models.Model):
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    contents = models.TextField()

    def __str__(self):
        return self.title