import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  // public addCategory(category: Category): Observable<Category> {
  //   return this.post('categories', category);
  // }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('categories');
  }

  // updateCategory(category: Category): Observable<Category> {
  //   return this.put(`categories/${category.id}`, category) ;
  // }
  //
  public getCategoryById(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`categories/${id}`);
  }
}
