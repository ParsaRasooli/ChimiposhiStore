import { Route } from '@angular/router';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ThankYouComponent } from './pages/checkout-page/thank-you/thank-you.component';
import { AuthGuard } from '@chimiposhi/users';

export const ordersRoutes: Route[] = [
    /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    {
        path: 'checkout',
        component: CheckoutPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'success',
        component: ThankYouComponent
    }
];
