import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UsersService } from '@chimiposhi/users';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { OrderItem } from '../../models/order-item';
import { CartService } from '../../services/cart.service';
import { Cart, CartItem } from '../../models/cart';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';
import { ORDER_STATUS } from '../../order.constants';

@Component({
    selector: 'orders-checkout-page',
    templateUrl: './checkout-page.component.html',
    styles: []
})
export class CheckoutPageComponent implements OnInit {
    form!: FormGroup;
    isSubmitted = false;
    editmode = false;
    currentUserId!: string;
    countries = [];
    orderItems: OrderItem[] = [];

    constructor(
        private messageService: MessageService,
        private formBuilder: FormBuilder,
        private usersService: UsersService,
        private location: Location,
        private route: ActivatedRoute,
        private cartSerivce: CartService,
        private orderService: OrdersService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this._initUserForm();
        // this._getCountries();
        this._getCartitems();
        this._checkEditMode();
    }

    private _initUserForm() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],

            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],

            street: ['', Validators.required],
            apartment: ['', Validators.required],
            zip: ['', Validators.required],
            city: ['', Validators.required]
        });
    }
    private _getCartitems() {
        this.cartSerivce.getCart().items?.map((cart) => {
            this.orderItems = [
                {
                    product: cart.productId as string,
                    quantity: cart.quantity
                }
            ];
        });
        console.log(this.orderItems);
    }

    // private _getCountries() {
    //   this.countries = this.usersService.getCountries();
    // }

    private _addUser(user: User) {
        this.usersService.createUser(user).subscribe(
            (user: User) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: `User ${user.name} is created!`
                });
                timer(2000)
                    .toPromise()
                    .then(() => {
                        this.location.back();
                    });
            },
            () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'User is not created!'
                });
            }
        );
    }

    private _updateUser(user: User) {
        this.usersService.updateUser(user).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'User is updated!'
                });
                timer(2000)
                    .toPromise()
                    .then(() => {
                        this.location.back();
                    });
            },
            () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'User is not updated!'
                });
            }
        );
    }

    private _checkEditMode() {
        this.route.params.subscribe((params) => {
            if (params['id']) {
                this.editmode = true;
                this.currentUserId = params['id'];
                this.usersService.getUser(params['id']).subscribe((user) => {
                    this.userForm['name'].setValue(user.name);
                    this.userForm['email'].setValue(user.email);
                    this.userForm['phone'].setValue(user.phone);
                    this.userForm['street'].setValue(user.street);
                    this.userForm['apartment'].setValue(user.apartment);
                    this.userForm['zip'].setValue(user.zip);
                    this.userForm['city'].setValue(user.city);
                });
            }
        });
    }

    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        const user: User = {
            id: this.currentUserId,
            name: this.userForm['name'].value,
            email: this.userForm['email'].value,
            phone: this.userForm['phone'].value,
            street: this.userForm['street'].value,
            apartment: this.userForm['apartment'].value,
            zip: this.userForm['zip'].value,
            city: this.userForm['city'].value
        };
        if (this.editmode) {
            this._updateUser(user);
        } else {
            this._addUser(user);
        }
    }

    get userForm() {
        return this.form.controls;
    }
    placeOrder() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }

        const order: Order = {
            orderItems: this.orderItems,
            shippingAddress1: this.form.controls['street'].value,
            shippingAddress2: this.form.controls['apartment'].value,
            city: this.form.controls['city'].value,
            zip: this.form.controls['zip'].value,
            country: 'string',
            phone: this.form.controls['phone'].value,
            status: 0,
            user: '609d65943373711346c5e950',
            dateOrdered: '' + Date.now()
        };
        this.orderService.createOrder(order).subscribe(
            () => {
                this.router.navigate(['/success']);
            },
            () => console.log('show error here')
        );
    }
}
