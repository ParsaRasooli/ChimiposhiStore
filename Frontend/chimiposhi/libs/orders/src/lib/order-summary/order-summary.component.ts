import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'orders-order-summary',
    templateUrl: './order-summary.component.html',
    styles: []
})
export class OrderSummaryComponent implements OnInit {
    totalPrice!: number;
    constructor(private cartService: CartService, private router: Router) {}

    ngOnInit(): void {
        this._getOrderSummary();
    }
    _getOrderSummary() {
        this.cartService.cart$.pipe().subscribe((cart) => {
            this.totalPrice = 0;
            if (cart) {
                cart.items?.map((item) => {
                    this.cartService
                        .getProd('' + item.productId)
                        .pipe(take(1))
                        .subscribe((product) => {
                            this.totalPrice += product.price * item.quantity;
                        });
                });
            }
        });
    }
    navigateCheckout() {
        this.router.navigate(['/checkout']);
    }
}
