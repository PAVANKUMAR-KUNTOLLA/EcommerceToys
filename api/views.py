import os
import io
import re
import copy
import datetime

from django.http import HttpResponse
from django.shortcuts import render
import pandas as pd
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status #pagination
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

from toys.settings import MEDIA_ROOT

@api_view(["GET",])
def index(request):
    df = pd.read_csv(os.path.join(MEDIA_ROOT, "Products", "toys_data.csv"))
    df = df[["type", "title", "price", "image_0"]]
    data = df.to_dict(orient="records")
    return Response(data=data, status=status.HTTP_200_OK)
