from products.models import Product, Category
from users.models import User, UserProducts
import os
import json
import pandas as pd

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
            product_ins = Product.objects.filter(title=row["title"], category=category_ins, description=row["description"], price=row["price"], images=images)
            product_ins.save()
            print("successfully created")
        except Exception as excepted_message:
            print(excepted_message)
            print("Failed")
    return

def get_products(request):
    if "title" in request.data.keys():
        request_data = request.data.copy()
        title = request_data["title"]
        products = Product.objects.filter(title=title).values()
    else:
        products = Product.objects.all().values()
    user_products = UserProducts.objects.filter(user__id=request.user.id).values()
    print(user_products)
    
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

    if len(return_dict) == 1:
        return_dict = return_dict[0]
    return return_dict

def update_user_product_info(request):
    if "title" in request.data.keys():
        request_data = request.data.copy()
        user = User.objects.get(id=request.user.id)
        title = request_data["title"]
        product = Product.objects.get(title=title)
   
        if UserProducts.objects.filter(user__id=user.id, product__title=title).exists():
            user_product_ins = UserProducts.objects.get(user__id=request.user.id, product__id=product.id)
        else:
            user_product_ins = UserProducts.objects.create(user=user, product=product)

        if "is_favourite" in request_data.keys():
            user_product_ins.is_favourite = request_data["is_favourite"]
        if "is_item_in_cart" in request_data.keys():
            user_product_ins.is_item_in_cart = request_data["is_item_in_cart"]
        if "quantity" in request_data.keys():
            user_product_ins.quantity = request_data["quantity"]
        if "is_brought" in request_data.keys():
            user_product_ins.is_brought = request_data["is_brought"]

        user_product_ins.save()

        return_dict = {"id":product.id, "title":product.title, "description":product.description, "price":product.price, "category":product.category.name}
        images = json.loads(product.images)
        for index, each_img in enumerate(images):
            return_dict[f'image_{index}']=each_img

        return_dict["is_favourite"] = user_product_ins.is_favourite
        return_dict["is_item_in_cart"] = user_product_ins.is_item_in_cart
        return_dict["quantity"] = user_product_ins.quantity
        return_dict["is_brought"] = user_product_ins.is_brought
    else:
        raise Exception("Product title is Required")
        
    return return_dict