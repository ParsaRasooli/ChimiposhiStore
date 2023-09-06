import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@chimiposhi/products';

import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'admin-categories-list',
    templateUrl: './categories-list.component.html',
    styles: []
})
export class CategoriesListComponent implements OnInit {
    categories: Category[] = [];
    editMode = false;
    updatedName!: string;
    updatedIcon = '';
    _categoryid = '';
    categoryIcon = 'default';
    categoryName = 'default';
    constructor(private categoryService: CategoriesService, private messageService: MessageService, private confirmationService: ConfirmationService) {}
    ngOnInit(): void {
        this._getCategory();
    }
    deleteCategory(categoryId: string, event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure that you want to delete this category?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.categoryService.deleteCategory(categoryId).subscribe(
                    () => {
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category deleted successfully !' });
                        this._getCategory();
                    },
                    () => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to remvove category !' });
                    }
                );
            }
        });
    }
    private _getCategory() {
        this.categoryService.getCategories().subscribe((res) => {
            this.categories = res;
        });
    }
    onEdit(category: Category) {
        this.editMode = true;
        this._categoryid = '' + category.id;
        this.categoryIcon = category.icon;
        this.categoryName = category.name;
    }
    editCategory(category: Category) {
        this.editMode = false;
        const updatedCategoryRow: Category = {
            id: category.id,
            name: this.categoryName,
            icon: this.categoryIcon,
            color: category.color
        };
        this.categoryService.updateCategory(updatedCategoryRow).subscribe({
            next: () => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category updated successfully !' });
                this._getCategory();
            },
            error: () => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Could not update the category !' });
            }
        });
    }
    onCancel() {
        this.editMode = !this.editMode;
        this._getCategory();
    }
}
