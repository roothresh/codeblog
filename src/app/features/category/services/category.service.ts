import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest) : Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Categories`, model);
  }
  //array list gelecek o yüzden observable içerisinde category modeli array collection olarak tanımlıyoruz
  getCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Categories`);
  }

  getCategoryById(id: string): Observable<Category | undefined>{
    return this.http.get<Category | undefined>(`${environment.apiBaseUrl}/api/Categories/${id}`);
  }

  updateCategory(id: string, model: UpdateCategoryRequest) : Observable<Category>{
    return this.http.put<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`, model);
  }

  deleteCategory(id: string) : Observable<Category>{
    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`);
  }

}
