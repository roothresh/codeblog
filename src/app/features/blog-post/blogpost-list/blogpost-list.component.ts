import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogpost } from '../models/blog-post.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  blogposts$? : Observable<Blogpost[]>;

  constructor(private blogPostService: BlogPostService){

  }

  ngOnInit(): void {
    this.blogposts$ = this.blogPostService.getBlogPosts();
  }
}
