import { Component, OnDestroy } from '@angular/core';
import { AddBlogPost } from '../models/add-blogpost-request-model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnDestroy {

  model: AddBlogPost;

  constructor(private blogPostService: BlogPostService, private router: Router){
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl:'',
      author: '',
      isVisible: true,
      publishedDate: new Date()
    }
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  onFormSubmit(): void{
    this.blogPostService.createBlogPost(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/blogposts');
      }
    });
  }

}
