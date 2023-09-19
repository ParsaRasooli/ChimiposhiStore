import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    isCheckOut = false;
    @Output() Open: EventEmitter<any> = new EventEmitter();
    constructor(private cartService: CartService, private router: Router) {
        router.url.includes('checkout') ? (this.isCheckOut = true) : (this.isCheckOut = false);
    }

    ngOnInit(): void {
        this._getOrderSummary();
    }
    update() {
        this.Open.emit(true);
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
                            this.totalPrice += product?.price * item.quantity;
                        });
                });
            }
        });
    }
}
