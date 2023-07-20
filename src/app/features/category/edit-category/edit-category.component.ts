import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { UpdateCategoryRequest } from '../models/update-category-request-model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy{

  id: string | null = null;
  paramsSubscription?: Subscription;
  updateCategorySubscription?: Subscription;
  category?: Category;

  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryService,
    private router: Router){
    
  }
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.updateCategorySubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        //app-routing.module de ne tanımladıysan onu yazmak gerekiyor
        this.id = params.get('id');

        if(this.id){
          //id boş değilse servisi çağır
          this.categoryService.getCategoryById(this.id)
          .subscribe({
            next: (response) => {
              this.category = response
            }
          })
        }

        
      }
    })
  }

  onFormSubmit(): void{
    const updateCategoryRequest: UpdateCategoryRequest = {
      name: this.category?.name ?? '',
      urlHandle: this.category?.urlHandle ?? ''
    };

    if(this.id){
      this.updateCategorySubscription = this.categoryService.updateCategory(this.id, updateCategoryRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/categories');
        }
      })
    }
    
  }

  onDelete(): void{
    if(this.id){
      this.categoryService.deleteCategory(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/categories');
        }
      });
    }
    
  }

}
