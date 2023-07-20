import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blogpost-request-model';
import { Observable } from 'rxjs';
import { Blogpost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  createBlogPost(data: AddBlogPost): Observable<Blogpost>{
    return this.http.post<Blogpost>(`${environment.apiBaseUrl}/api/blogposts`, data);
  }

  getBlogPosts(): Observable<Blogpost[]>{
    return this.http.get<Blogpost[]>(`${environment.apiBaseUrl}/api/blogposts`);
  }
}
