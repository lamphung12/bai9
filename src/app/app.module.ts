import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ListProductBackendComponent} from "./product-be/list-product-backend/list-product-backend.component";
import {CreateCategoryComponent} from "./category-be/create-category/create-category.component";
import {DeleteProductBeComponent} from "./product-be/delete-product-be/delete-product-be.component";
import {ListCategoryComponent} from "./category-be/list-category/list-category.component";
import {EditProductBeComponent} from "./product-be/edit-product-be/edit-product-be.component";
import {CreateProductBeComponent} from "./product-be/create-product-be/create-product-be.component";



@NgModule({
  declarations: [
    AppComponent,
    ListProductBackendComponent,
    CreateProductBeComponent,
    EditProductBeComponent,
    DeleteProductBeComponent,
    ListCategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
