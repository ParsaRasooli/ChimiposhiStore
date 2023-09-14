import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';

@Component({
    selector: 'products-products-list',
    templateUrl: './products-list.component.html',
    styles: []
})
export class ProductsListComponent implements OnInit {
    products: Product[] = [];
    binary = true;
    categories: Category[] = [];
    constructor(private productsService: ProductsService, private categoryService: CategoriesService) {}
    ngOnInit(): void {
        this._getProducts();
        this._getCategories();
    }

    private _getProducts(categoriesFilter?: string[]) {
        this.productsService.getProducts(categoriesFilter).subscribe((res) => (this.products = res));
    }
    private _getCategories() {
        this.categoryService.getCategories().subscribe((res) => (this.categories = res));
    }
    categoryFilter() {
        const selectedCategories = this.categories.filter((category) => category.checked).map((category) => category.id);
        this._getProducts(selectedCategories as string[]);
    }
}
