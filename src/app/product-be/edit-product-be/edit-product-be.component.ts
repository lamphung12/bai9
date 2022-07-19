import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductBeService} from "../../service/product-be.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-edit-product-be',
  templateUrl: './edit-product-be.component.html',
  styleUrls: ['./edit-product-be.component.css']
})
export class EditProductBeComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price : new FormControl(''),
    categoryId: new FormControl('')
  })

  obj: any;
  listCategory: Category[] = [];
   id: any ;

  constructor(private productBeService: ProductBeService,
              private activatedRoute: ActivatedRoute,
              // ActivatedRoute lấy dữ liệu trên đường dẫn) { }
              private categoryService: CategoryService,
              private router: Router){
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }
  ngOnInit(): void {
    this.categoryService.findAll().subscribe((data) => {
      this.listCategory = data;
    });

  }

  private getProduct(id: number) {
    return this.productBeService.getById(id).subscribe(data => {
      this.form = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        categoryId: new FormControl(data.category.id),
      });
    });

  }
  edit(id:number){
    this.obj={
      name: this.form.value.name,
      price: this.form.value.price,
      category: {
        id:this.form.value.categoryId
      }
    };
    this.productBeService.edit(id, this.obj).subscribe(() => {
      this.router.navigate(['/product-be']);
      alert('Cập nhật thành công');
    }, error => {
      console.log(error);
    });
  }

}
