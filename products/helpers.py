import os
import copy
import json
import pandas as pd

from toysStore.settings import DEFAULT_FROM_EMAIL
from django.core.mail import EmailMessage
from django.db.models import Q
from products.models import Product, Category
from users.models import User, UserProducts, UserOrderHistory

def create_products():
    df = pd.read_csv(os.path.join("media", "Products", "toys_data.csv"))
    for index, row in df.iterrows():
        try:
            print(row["title"])
            category_ins = Category.objects.get(name=row["category"])
            images=[]
            for i in range(16):
                images.append(row[f'image_{i}'])
            images = json.dumps(images)
            product_ins = Product.objects.create(title=row["title"], category=category_ins, description=row["description"], price=row["price"], images=images)
            product_ins.save()
            print("successfully created")
        except Exception as excepted_message:
            print(excepted_message)
            print("Failed")
    return

def update_products():
    df = pd.read_csv(os.path.join("media", "Products", "toys_data.csv"))
    for index, row in df.iterrows():
        try:
            print(row["title"])
            category_ins = Category.objects.get(name=row["category"])
            if not category_ins.name == "statue":
                continue
            product_ins = Product.objects.get(title=row["title"], description=row["description"], price=row["price"])
            if product_ins.category.name == "collectibles":
                product_ins.category = category_ins
                product_ins.save()
            print("successfully updated")
        except Exception as excepted_message:
            print(excepted_message)
            print("Failed")
    return

def get_products(request):
    request_data = request.data.copy()
    
    products = Product.objects.all()
    
    if request.method == "POST":
        if "search" in request_data and request_data["search"]:
            products = products.filter(Q(title__startswith=request_data["search"].capitalize())|Q(category__name__startswith=request_data["search"]))
    
        elif any([request_data[each] != None for each in ["category", "character", "price"] if each in request_data]):
            filter_dict = dict()
            if "category" in request_data.keys() and request_data["category"]:
                filter_dict["category__name"] = request_data['category']

            if "character" in request_data.keys() and request_data["character"]:
                filter_dict["title__startswith"] = request_data['character'].capitalize()

            if "price" in request_data.keys() and request_data["price"]:
                if not request_data["price"] == "above 100000":
                    filter_dict["price__lte"] = request_data["price"].split('-')[1]
                    filter_dict["price__gte"] = request_data["price"].split('-')[0]
                else:
                    filter_dict["price__gte"] = request_data["price"].split(' ')[1]
        
            if filter_dict:
                products = products.filter(**filter_dict)

    products = products.distinct().values()
        
    user_products = UserProducts.objects.filter(user__id=request.user.id).values()
    
    return_dict = []
    for index, each in enumerate(products):
        is_product_related_to_user = False
        each_prod = {"id":each["id"], "title":each["title"], "description":each["description"], "price":each["price"]}
        each_prod["category"] = Category.objects.get(id=each["category_id"]).name
        images = json.loads(each["images"])
        for index2, each_img in enumerate(images):
            each_prod[f'image_{index2}']=each_img

        for prod in user_products:
            if prod["product_id"]==each["id"]:
                each_prod["is_favourite"] = prod["is_favourite"]
                each_prod["is_item_in_cart"] = prod["is_item_in_cart"]
                each_prod["quantity"] = prod["quantity"]
                each_prod["is_brought"] = prod["is_brought"]
                is_product_related_to_user = True
                break
            else:
                continue
        if not is_product_related_to_user:
            each_prod["is_favourite"] = False
            each_prod["is_item_in_cart"] = False
            each_prod["quantity"] = 0
            each_prod["is_brought"] = False
        return_dict.append(each_prod)

    return return_dict

def update_user_product_info(request):
    if "id" in request.data.keys():
        request_data = request.data.copy()
        user = User.objects.get(id=request.user.id)
        id = request_data["id"]
        product = Product.objects.get(id=id)
   
        if UserProducts.objects.filter(user__id=user.id, product__id=id).exists():
            user_product_ins = UserProducts.objects.get(user__id=request.user.id, product__id=product.id)
        else:
            user_product_ins = UserProducts.objects.create(user=user, product=product)
            user.products.add(user_product_ins)
            user.save()

        if "is_favourite" in request_data.keys():
            user_product_ins.is_favourite = request_data["is_favourite"]
        if "is_item_in_cart" in request_data.keys():
            user_product_ins.is_item_in_cart = request_data["is_item_in_cart"]
        if "quantity" in request_data.keys():
            user_product_ins.quantity = request_data["quantity"]

        user_product_ins.save()
    else:
        raise Exception("Product Id is Required")

def place_order_helper(request):
    request_data = request.data.copy()
    user = User.objects.get(id=request.user.id)
    if len(request_data) == 0:
        raise Exception("Products Info is required")
    message = f'Hi {user.name}, \n\n Title                                           quantity                     price'
    total_amount = 0
    for index, each in enumerate(request_data):
        try:
            if UserProducts.objects.filter(user__id=user.id, product__id=each["id"]).exists():
                product = Product.objects.get(id=each["id"])
                user_product_ins = UserProducts.objects.get(user__id=user.id, product__id=each["id"])
            else:
                raise Exception("Requested product is not in your cart")

            if user_product_ins.quantity == 0:
                raise Exception("please select the quantity")

            if not user_product_ins.is_item_in_cart:
                raise Exception("please add the product to cart")
           
            order_ins = UserOrderHistory.objects.create(user=user, product=product, quantity=user_product_ins.quantity, price=product.price)
            order_ins.save()

            user.orders.add(order_ins)
            user.save()

            total_amount += user_product_ins.quantity * user_product_ins.product.price
            message += f'\n{user_product_ins.product.title}                                           {user_product_ins.quantity}                     {user_product_ins.product.price}'
            
            user_product_ins.quantity=0
            user_product_ins.is_item_in_cart=False
            user_product_ins.is_brought = True
            user_product_ins.save()
            
        except Exception as excepted_message:
            print(excepted_message)
            raise Exception(excepted_message)
        
    subject = 'Ecommerce Toys Store - Order Placed successfully'
    message += f"\n\n Total                                                    {total_amount}\n\n Thank you.visit again"
    from_email = DEFAULT_FROM_EMAIL
    to = [user.email, ]
    email = EmailMessage(subject, message, from_email, to)
    email.send()

def record_visit_history_helper(request):
    if "id" in request.data.keys():
        request_data = request.data.copy()
        user = User.objects.get(id=request.user.id)
        product = Product.objects.get(id=request_data["id"])
     
        if UserProducts.objects.filter(user__id=user.id, product__id=product.id).exists():
           user_product_ins = UserProducts.objects.get(user__id=user.id, product__id=product.id)
           user_product_ins.view_count = user_product_ins.view_count + 1
        else:
            user_product_ins  = UserProducts.objects.create(user=user, product=product)
            user_product_ins.view_count=1
            user.products.add(user_product_ins)
            user.save()
        user_product_ins.save()
        return user_product_ins.product.title
    else:
        raise Exception("Product Id is required")