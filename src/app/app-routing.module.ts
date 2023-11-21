import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostsDetailsComponent } from './posts/posts-details/posts-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: PostsDetailsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
