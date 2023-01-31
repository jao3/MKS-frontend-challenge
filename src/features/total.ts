import { Product } from "@/types/products";

export const totalPrice = (cartItems: Array<Product>) => {
    cartItems.reduce((total, item) => item.price * item.quantity + total, 0);
}
