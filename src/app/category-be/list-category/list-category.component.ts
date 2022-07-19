import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/Category";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  category: Category[] = [];


  constructor(private  categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.categoryService.findAll().subscribe(result => {
      // @ts-ignore
      this.clazz = result;
    }, error => {
      console.log(error);
    });
  }

}
