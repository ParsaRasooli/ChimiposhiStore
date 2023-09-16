import { Component, Input } from '@angular/core';

@Component({
    selector: 'orders-cart',
    templateUrl: './cart.component.html',
    styles: []
})
export class CartComponent {
    visible = true;
    @Input() show!: boolean;
}
