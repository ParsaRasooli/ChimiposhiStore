import { Route } from '@angular/router';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

export const ordersRoutes: Route[] = [
    /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    {
        path: 'checkout',
        component: CheckoutPageComponent
    }
];
