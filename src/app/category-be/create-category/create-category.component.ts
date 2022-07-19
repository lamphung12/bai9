import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  // // @ts-ignore
  // formCate : new FormGroup = new FormGroup({
  //   name: new FormControl()
  // })

  constructor( private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  // add(){
  //   const category = this.formCate.value;
  //   this.categoryService.save(category).subscribe(() => {
  //     alert('Thành công');
  //   }, error => {
  //     alert('Lỗi');
  //   }) ;
  // }

}
