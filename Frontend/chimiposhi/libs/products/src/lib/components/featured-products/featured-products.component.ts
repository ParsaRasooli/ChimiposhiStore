import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
    selector: 'products-featured-products',
    templateUrl: './featured-products.component.html',
    styles: []
})
export class FeaturedProductsComponent implements OnInit {
    products: Product[] = [];
    constructor(private productService: ProductsService) {}
    ngOnInit(): void {
        this._getFeaturedProducts();
    }
    private _getFeaturedProducts() {
        this.productService.getFeaturedProducts(4).subscribe((prods) => (this.products = prods));
    }
}
