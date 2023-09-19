import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Product, ProductsService } from '@chimiposhi/products';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

export const CARD_KEY = 'cart';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart());
    API_URL = environment.apiurl + 'products';
    constructor(private http: HttpClient) {}
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
    setCartItem(cartItem: CartItem, updateCartItem?: boolean): Cart {
        const cart: Cart = this.getCart();
        const cardItemExist = cart.items?.find((item) => item.productId === cartItem.productId);
        if (cardItemExist) {
            cart.items?.map((item) => {
                if (item.productId === cartItem.productId) {
                    if (updateCartItem) {
                        item.quantity = cartItem.quantity;
                    } else item.quantity = item.quantity + cartItem.quantity;
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

    totalCartPrice() {
        let totalPrice: number;
        this.cart$.pipe().subscribe();
    }
    getProd(id: string): Observable<Product> {
        return this.http.get<Product>(`${this.API_URL}/${id}`);
    }
    deleteCartItem(productid: string) {
        console.log();
        const cart = this.getCart();
        cart.items = cart.items?.filter((item) => item.productId !== productid);
        localStorage.setItem(CARD_KEY, JSON.stringify(cart));
        this.cart$.next(cart);
    }
}
