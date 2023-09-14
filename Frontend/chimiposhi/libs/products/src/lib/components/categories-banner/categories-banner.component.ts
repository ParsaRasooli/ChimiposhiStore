import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'products-categories-banner',
    templateUrl: './categories-banner.component.html',
    styles: []
})
export class CategoriesBannerComponent implements OnInit, OnDestroy {
    categories!: Category[];
    endsubs$: Subject<any> = new Subject();
    constructor(private categoryService: CategoriesService) {}

    ngOnInit(): void {
        this.categoryService
            .getCategories()
            .pipe(takeUntil(this.endsubs$))
            .subscribe((res) => {
                this.categories = res;
            });
    }
    ngOnDestroy(): void {
        this.endsubs$.complete();
    }
}
