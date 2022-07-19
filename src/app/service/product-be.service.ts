import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductBeService {
  API = 'http://localhost:8080/api/products'

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<Product[]>{
      // @ts-ignore
    return this.httpClient.get(this.API);
  }

  save(product:Product): Observable<any> {
    return this.httpClient.post(this.API,product)
  }

  getById(id: any): Observable<Product> {
    return this.httpClient.get<Product>(this.API + `/${id}`);
  }

  edit(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.API}/${id}`, product);
  }
  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API + `/${id}`);
  }



}
