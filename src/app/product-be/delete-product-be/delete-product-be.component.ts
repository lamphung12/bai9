import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductBeService} from "../../service/product-be.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-delete-product-be',
  templateUrl: './delete-product-be.component.html',
  styleUrls: ['./delete-product-be.component.css']
})
export class DeleteProductBeComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price : new FormControl(''),
    categoryId: new FormControl('')
  })
  id: any;

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
  delete(id:number){
    this.productBeService.delete(id).subscribe(() => {
      this.router.navigate(['/product-be']);
      alert('Xoá thành công');
    }, error => {
      console.log(error);
    });
  }
}
