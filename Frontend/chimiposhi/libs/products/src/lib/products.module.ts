import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './lib.routes';
import { ProductsSearchComponent } from './components/products-search/products-search.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(productsRoutes)],
    declarations: [ProductsSearchComponent],
    exports: []
})
export class ProductsModule {}
