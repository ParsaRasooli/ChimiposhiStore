import { Component, OnInit } from '@angular/core';
import { OrdersService } from '@chimiposhi/orders';
import { ProductsService } from '@chimiposhi/products';
import { UsersService } from '@chimiposhi/users';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'admin-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    statistics: number[] = [];
    constructor(private userService: UsersService, private productService: ProductsService, private ordersService: OrdersService) {}

    ngOnInit(): void {
        combineLatest([
            this.ordersService.getOrdersCount(),
            this.productService.getProductsCount(),
            this.userService.getUsersCount(),
            this.ordersService.getTotalSales()
        ]).subscribe((values) => {
            this.statistics = values;
        });
    }
}