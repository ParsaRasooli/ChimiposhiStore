import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';

import { CartDetail } from '../../models/cart';
import { Observable, from, of } from 'rxjs';
import { Product } from '@chimiposhi/products';

@Component({
    selector: 'orders-cart',
    templateUrl: './cart.component.html',
    styles: []
})
export class CartComponent implements OnInit {
    visible = true;
    cartSideBar = false;
    products: CartDetail[] = [];
    products$!: Observable<CartDetail[]>;
    @Input() show!: boolean;
    @Output() status: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private cartService: CartService) {}
    ngOnInit(): void {
        this.data();
    }
    data() {
        this.cartService.cart$.pipe().subscribe((item) => {
            this.products = [];
            item.items?.forEach((cartItem) => {
                this.cartService.getProd('' + cartItem.productId).subscribe((sub) => this.products.push({ product: sub, quantity: cartItem.quantity }));
                // this.products$ = from([this.products]);
            });
        });
    }
    onHide() {
        this.cartSideBar = !this.cartSideBar;
        this.status.emit(this.cartSideBar);
    }
}
