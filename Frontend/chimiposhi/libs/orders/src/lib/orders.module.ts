import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ordersRoutes } from './lib.routes';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { MessageService, PrimeIcons } from 'primeng/api';
import { CartComponent } from './components/cart/cart.component';
import { SidebarModule } from 'primeng/sidebar';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        RouterModule.forChild(ordersRoutes),

        BadgeModule,
        ToastModule,
        SidebarModule,
        CardModule,
        DividerModule,
        InputNumberModule,
        FormsModule
    ],
    declarations: [CartIconComponent, CartComponent, CartItemComponent, OrderSummaryComponent, CheckoutPageComponent],
    exports: [CartIconComponent, CartComponent, CartItemComponent, OrderSummaryComponent, CheckoutPageComponent],
    providers: [MessageService]
})
export class OrdersModule {}
