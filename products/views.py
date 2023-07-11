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

def index(request):
    return render(request, 'index.html')

@api_view(["GET","POST"])
def products(request):
    try:
        df = pd.read_csv(os.path.join(MEDIA_ROOT, "Products", "toys_data.csv"))
        if request.method == "GET":
            df = df[["category", "title", "price","image_0", "is_favourite", "is_item_in_cart"]]
            data = df.to_dict(orient="records")
            context = {"data":data, "status_flag":True, "status":status.HTTP_200_OK, "message":None}
            return Response(data=context, status=status.HTTP_200_OK)
        
        elif request.method == "POST":
            request_data = request.data.copy()
            title = request_data["title"]
            df = df[df["title"]==title]
            data = df.to_dict(orient="records")
            context = {"data":data[0], "status_flag":True, "status":status.HTTP_200_OK, "message":None}
            return Response(data=context, status=status.HTTP_200_OK)
        
        else:
            context = {"data":None, "status_flag":False, "status":status.HTTP_405_METHOD_NOT_ALLOWED, "message":"Only POST & GET Method available"}
            return Response(data=context, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    except Exception as excepted_message:
        print(str(excepted_message))
        context = {"data":None, "status_flag":False, "status":status.HTTP_400_BAD_REQUEST, "message":str(excepted_message)}
        return Response(data=context, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def edit_product(request):
    try:
        if request.method == "GET":
            context = {"data":None, "status_flag":False, "status":status.HTTP_405_METHOD_NOT_ALLOWED, "message":"Only GET Method available"}
            return Response(data=context, status=status.HTTP_405_METHOD_NOT_ALLOWED)
        
        elif request.method == "POST":
            request_data = request.data.copy()
            title = request_data["title"]
            df = pd.read_csv(os.path.join(MEDIA_ROOT, "Products", "toys_data.csv"))

            if "is_favourite" in request_data.keys():
                df.loc[df.title == title, "is_favourite"] = request_data["is_favourite"]
            if "is_item_in_cart" in request_data.keys():
                df.loc[df.title == title, "is_item_in_cart"] = request_data["is_item_in_cart"]
            if "is_brought" in request_data.keys():
                df.loc[df.title == title,"is_brought"] = request_data["is_brought"]
            
            df.to_csv(os.path.join(MEDIA_ROOT, "Products", "toys_data.csv"), index=False)
            
            df = pd.read_csv(os.path.join(MEDIA_ROOT, "Products", "toys_data.csv"))
            df = df[df["title"]==title]
            data = df.to_dict(orient="records")
            context = {"data":data[0], "status_flag":True, "status":status.HTTP_200_OK, "message":None}
            return Response(data=context, status=status.HTTP_200_OK)
        
        else:
            context = {"data":None, "status_flag":False, "status":status.HTTP_405_METHOD_NOT_ALLOWED, "message":"Only POST Method available"}
            return Response(data=context, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    except Exception as excepted_message:
        print(str(excepted_message))
        context = {"data":None, "status_flag":False, "status":status.HTTP_400_BAD_REQUEST, "message":str(excepted_message)}
        return Response(data=context, status=status.HTTP_400_BAD_REQUEST)