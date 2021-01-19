import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ICategory } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public updateCategories: Subject<any> = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  public createCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>('categories', category);
  }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('categories');
  }

  public updateCategory(category: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(`categories/${category.id}`, category) ;
  }

  public getCategoryById(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`categories/${id}`);
  }

  public deleteCategoryById(id: number): Observable<ICategory> {
    return this.http.delete<ICategory>(`categories/${id}`);
  }
}
