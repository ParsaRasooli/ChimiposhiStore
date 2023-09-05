import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    categoryEditForm!: FormGroup;
    editMode = false;
    isSubmitted = false;
    _categoryid = '';
    constructor(
        private categoryService: CategoriesService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private formbuilder: FormBuilder
    ) {}
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
                    (res) => {
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category deleted successfully !' });
                        this._getCategory();
                    },
                    (error) => {
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
    onEdit(categoryId: string) {
        this.editMode = true;
        this._categoryid = categoryId;
    }
    editCategory() {
        this.isSubmitted = true;
        this.categoryEditForm = this.formbuilder.group({
            name: ['', Validators.required],
            icon: ['', Validators.required]
        });
    }
}
