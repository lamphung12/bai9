import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_CA ='http://localhost:8080/api/categorys' ;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Category[]> {
    // @ts-ignore
    return this.httpClient.get(this.API_CA);
  }
  //
  // saveCategory(category): Observable<any> {
  //   return this.httpClient.post(this.API_CA,category)
  // }
  //
  // constructor(private httpClient: HttpClient) { }
}
