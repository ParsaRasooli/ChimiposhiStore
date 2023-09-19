import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'orders-cart-icon',
    templateUrl: './cart-icon.component.html',
    styles: []
})
export class CartIconComponent implements OnInit {
    cartCount = 0;
    cartSlider!: boolean;
    constructor(private cartService: CartService) {}
    ngOnInit(): void {
        this.cartService.cart$.subscribe((cart) => (this.cartCount = (cart?.items?.length as number) ?? 0));
    }
}
