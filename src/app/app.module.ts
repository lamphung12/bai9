import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ListProductBackendComponent} from "./product-be/list-product-backend/list-product-backend.component";

import {DeleteProductBeComponent} from "./product-be/delete-product-be/delete-product-be.component";
import {ListCategoryComponent} from "./category-be/list-category/list-category.component";
import {EditProductBeComponent} from "./product-be/edit-product-be/edit-product-be.component";
import {CreateProductBeComponent} from "./product-be/create-product-be/create-product-be.component";
import { NavbarComponent } from './navbar/navbar/navbar.component';
import {environment} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";

@NgModule({
  declarations: [
    AppComponent,
    ListProductBackendComponent,
    CreateProductBeComponent,
    EditProductBeComponent,
    DeleteProductBeComponent,
    ListCategoryComponent,

    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
      AngularFireStorageModule,
      AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
