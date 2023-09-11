import { Product } from '@chimiposhi/products';

export interface OrderItem {
    product: Product;
    quantity: number;
}
