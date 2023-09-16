import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ordersRoutes } from './lib.routes';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CartComponent } from './components/cart/cart.component';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
    imports: [CommonModule, RouterModule.forChild(ordersRoutes), BadgeModule, ToastModule, SidebarModule],
    declarations: [CartIconComponent, CartComponent],
    exports: [CartIconComponent, CartComponent],
    providers: [MessageService]
})
export class OrdersModule {}
