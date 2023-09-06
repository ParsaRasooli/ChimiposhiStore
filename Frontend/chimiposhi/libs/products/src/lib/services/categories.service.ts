import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    constructor(private http: HttpClient) {}
    apiURLCategories = environment.apiurl + 'categories';
    /**
     * get all of the categories
     * @returns Observable of category[]
     */
    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.apiURLCategories);
    }

    createCategory(category: Category): Observable<Category> {
        return this.http.post<Category>(this.apiURLCategories, category);
    }
    deleteCategory(categoryId: string): Observable<object> {
        return this.http.delete<object>(`${this.apiURLCategories}/${categoryId}`);
    }
    updateCategory(category: Category): Observable<Category> {
        return this.http.put<Category>(`${this.apiURLCategories}/${category.id}`, category);
    }
}
