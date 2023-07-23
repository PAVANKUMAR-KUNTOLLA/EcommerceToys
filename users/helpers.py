from .models import UserOrderHistory, UserProductVisitHistory

def get_order_history(user):
    orders = UserOrderHistory.objects.filter(user__email=user).values("id", "product__title", "quantity", "price", "updated_at").order_by("-updated_at")
    return orders

def get_visit_history(user):
    history = UserProductVisitHistory.objects.filter(user__email=user).values("id", "product__title", "count", "updated_at").order_by("-updated_at")
    return history