import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService, Category } from '@chimiposhi/products';

import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
@Component({
    selector: 'admin-categories-form',
    templateUrl: './categories-form.component.html',
    styles: []
})
export class CategoriesFormComponent implements OnInit {
    form!: FormGroup;
    isSubmitted = false;
    constructor(
        private formbuilder: FormBuilder,
        private categoryService: CategoriesService,
        private messageService: MessageService,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.form = this.formbuilder.group({
            name: ['', Validators.required],
            icon: ['', Validators.required]
        });
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        const category: Category = {
            name: this.form.controls['name'].value,
            icon: this.form.controls['icon'].value
        };
        this.categoryService.createCategory(category).subscribe(
            (res) => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category created !' });
                timer(2000).subscribe(() => this.location.back());
            },
            (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category is not created !' });
            }
        );
    }
    get categoryForm() {
        return this.form.controls;
    }
}
