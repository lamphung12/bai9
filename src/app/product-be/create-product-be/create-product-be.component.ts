import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductBeService} from "../../service/product-be.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-create-product-be',
  templateUrl: './create-product-be.component.html',
  styleUrls: ['./create-product-be.component.css']
})
export class CreateProductBeComponent implements OnInit {
  form = new FormGroup({

    name: new FormControl(''),
    price : new FormControl(''),
    category: new FormControl('')
  })
  obj: any;
  listCategory : Category[]=[];
  constructor(private httpCline: HttpClient, private router: Router,
              private productBeService: ProductBeService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((data) => {
      this.listCategory = data;
    });
  }

  add(){
    console.log(this.form.value)
    this.obj ={
      name : this.form.value.name,
      price : this.form.value.price,
      category:{
        id:this.form.value.category
      }
    }

    this.productBeService.save(this.obj).subscribe((data) => {
      alert("Them thanh cong");
      this.obj=data;
      this.router.navigate(['product-be'])
    },error=>{
      alert('Loi')
    })
  }

}
