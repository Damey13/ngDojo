import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';
import { HomeComponent } from './home/home.component';
import { NewBlogComponent } from './new-blog/new-blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'newblog', component: NewBlogComponent },
  { path: 'new', component: NewBlogComponent },
  { path: 'dashboard/:id', component: DeleteBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
