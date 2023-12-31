import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '@chimiposhi/orders';
import { CartItem } from '@chimiposhi/orders';

@Component({
    selector: 'products-product-item',
    templateUrl: './product-item.component.html',
    styles: []
})
export class ProductItemComponent {
    @Input() product!: Product;
    constructor(private cartservice: CartService) {}
    addProductToCart() {
        const cartItem: CartItem = {
            productId: this.product.id,
            quantity: 1
        };
        this.cartservice.setCartItem(cartItem);
    }
}
