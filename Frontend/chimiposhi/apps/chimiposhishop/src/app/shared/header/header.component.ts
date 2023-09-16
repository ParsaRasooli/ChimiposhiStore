import { Component } from '@angular/core';
import { CartService } from 'libs/orders/src/lib/services/cart.service';

@Component({
    selector: 'chimiposhishop-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(cartservice: CartService) {
        cartservice.initLocalStorage();
    }
}
