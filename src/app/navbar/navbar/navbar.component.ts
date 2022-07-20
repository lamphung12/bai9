import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProductBeService} from "../../service/product-be.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productForm: FormGroup= new FormGroup({
    name: new FormControl(''),
    categoryId : new FormControl('')
  })

  form = new FormGroup({
    name: new FormControl(''),
    price : new FormControl(''),
    category: new FormControl('')
  })
  constructor(private httpCline: HttpClient,
              private productBeService: ProductBeService,
              private categoryService: CategoryService) { }
  listProduct:any;
  listCategory: Category[] = [];
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

  searchByName() {
    const name = this.productForm.value.name;
    this.productBeService.searchByName(name).subscribe((data) => {
      console.log(data)
      this.listProduct=data;
    },error=>{
      console.log(error)
    })
  }

  searchByCategoryId() {
    const id = this.productForm.value.categoryId;
    this.productBeService.getByCategoryId(id).subscribe(data => {
      this.listProduct = data;
      console.log(data);
    });
  }

  obj:any;
  add() {
    console.log(this.form.value)
    this.obj = {
      name: this.form.value.name,
      price: this.form.value.price,
      category: {
        id: this.form.value.category
      }
    }
    console.log(this.obj)
    this.productBeService.save(this.obj).subscribe((data) => {
      alert("Them thanh cong");
      this.obj=data;
      // this.router.navigate(['product-be'])
    },error=>{
      alert('Loi')
    })
  }

}
