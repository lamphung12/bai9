import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductBackendComponent} from "./product-be/list-product-backend/list-product-backend.component";
import {DeleteProductBeComponent} from "./product-be/delete-product-be/delete-product-be.component";
import {CreateProductBeComponent} from "./product-be/create-product-be/create-product-be.component";
import {EditProductBeComponent} from "./product-be/edit-product-be/edit-product-be.component";

const routes: Routes = [
  {
    path: 'product-be',
    component:ListProductBackendComponent,
    children:[
      {
        path: 'create',
        component: CreateProductBeComponent
      },
      {
        path: 'edit/:id',
        component: EditProductBeComponent
      },
      {
        path: 'delete/:id',
        component: DeleteProductBeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
