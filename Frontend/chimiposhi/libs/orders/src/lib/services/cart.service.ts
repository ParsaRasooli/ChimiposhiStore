import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from 'primeng/api';

export const CARD_KEY = 'cart';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart());

    initLocalStorage() {
        const cart: Cart = this.getCart();
        if (!cart) {
            const initialCart = {
                items: []
            };
            localStorage.setItem(CARD_KEY, JSON.stringify(initialCart));
        }
    }
    getCart(): Cart {
        const card: Cart = JSON.parse(localStorage.getItem(CARD_KEY) as string);
        return card;
    }
    setCartItem(cartItem: CartItem): Cart {
        const cart: Cart = this.getCart();
        const cardItemExist = cart.items?.find((item) => item.productId === cartItem.productId);
        if (cardItemExist) {
            cart.items?.map((item) => {
                if (item.productId === cartItem.productId) {
                    item.quantity = item.quantity + cartItem.quantity;
                }
            });
        } else {
            cart.items?.push(cartItem);
        }

        const cartJson = JSON.stringify(cart);
        localStorage.setItem(CARD_KEY, cartJson);
        this.cart$.next(cart);
        return cart;
    }
}
