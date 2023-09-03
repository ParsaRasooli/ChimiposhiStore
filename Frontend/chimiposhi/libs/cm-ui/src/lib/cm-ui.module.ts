import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cmUiRoutes } from './lib.routes';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(cmUiRoutes)],
    declarations: [
      BannerComponent,
      SliderComponent,
      UsersComponent,
      OrdersComponent
    ],
    exports: [
      BannerComponent,
      SliderComponent,
      UsersComponent,
      OrdersComponent
    ]
})
export class CmUiModule {}
