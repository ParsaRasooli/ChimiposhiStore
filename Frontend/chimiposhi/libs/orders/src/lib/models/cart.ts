import { Product } from '@chimiposhi/products';

export class Cart {
    items?: CartItem[];
}
export class CartItem {
    productId?: string;
    quantity!: number;
}
export class CartDetail {
    product!: Product;
    quantity!: number;
}
