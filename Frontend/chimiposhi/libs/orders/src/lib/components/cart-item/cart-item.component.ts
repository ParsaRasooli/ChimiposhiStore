import { Component, Input } from '@angular/core';
import { CartDetail } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'orders-cart-item',
    templateUrl: './cart-item.component.html',
    styles: []
})
export class CartItemComponent {
    @Input({
        required: true
    })
    cartData!: CartDetail;
    constructor(private cartService: CartService) {}
    delete() {
        this.cartService.deleteCartItem(this.cartData.product.id);
        console.log('sh');
    }
    updateCartQuantity(event: any, cartItem: CartDetail) {
        this.cartService.setCartItem(
            {
                productId: cartItem.product.id,
                quantity: event.value
            },
            true
        );
    }
}
