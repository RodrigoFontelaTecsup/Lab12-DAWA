import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PostsListComponent,
    PostsDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PostsListComponent, PostsDetailsComponent]
})
export class PostsModule { }
