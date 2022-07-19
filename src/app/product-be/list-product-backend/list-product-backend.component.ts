import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ProductBeService} from "../../service/product-be.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-list-product-backend',
  templateUrl: './list-product-backend.component.html',
  styleUrls: ['./list-product-backend.component.css']
})
export class ListProductBackendComponent implements OnInit {
  listProduct:any;
  listCategory: Category[] = [];

  constructor(private httpCline: HttpClient,
              private productBeService: ProductBeService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getCategory()

  }
  getCategory(){
    this.categoryService.findAll().subscribe((data) => {
      this.listCategory = data;
    });
  }

  getAll(){
    this.productBeService.findAll().subscribe((data) => {
      console.log(data)
      this.listProduct=data;
    },error=>{
      console.log(error)
    })
  }
}