import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'products-products-list',
    templateUrl: './products-list.component.html',
    styles: []
})
export class ProductsListComponent implements OnInit {
    products: Product[] = [];
    binary = true;
    isCategory = false;
    categories: Category[] = [];
    constructor(private productsService: ProductsService, private categoryService: CategoriesService, private route: ActivatedRoute) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            params.get('categoryid') ? this._getProducts([params.get('categoryid') as string]) : this._getProducts();
            params.get('categoryid') ? (this.isCategory = true) : (this.isCategory = false);
        });
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
