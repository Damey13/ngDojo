import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NewBlogComponent, DeleteBlogComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
