import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// // @ts-ignore
// import {Product} from "../model/Product";
import {ProductsBe} from "../model/Products-be";

@Injectable({
  providedIn: 'root'
})
export class ProductBeService {
  API = 'http://localhost:8080/api/products'

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<ProductsBe[]>{
      // @ts-ignore
    return this.httpClient.get(this.API);
  }

  save(product:ProductsBe): Observable<any> {
    console.log(product)
    return this.httpClient.post(this.API,product)
  }

  getById(id: any): Observable<ProductsBe> {
    return this.httpClient.get<ProductsBe>(this.API + `/${id}`);
  }

  edit(id: number, product: ProductsBe): Observable<ProductsBe> {
    return this.httpClient.put<ProductsBe>(`${this.API}/${id}`, product);
  }
  delete(id: number): Observable<ProductsBe> {
    return this.httpClient.delete<ProductsBe>(this.API + `/${id}`);
  }

  searchByName(name:string) : Observable<ProductsBe[]> {
    return this.httpClient.get<ProductsBe[]>(this.API + `/search-by-name?name=${name}`);
  }

  getByCategoryId(id:any): Observable<ProductsBe> {
    return this.httpClient.get<ProductsBe>(this.API + `/category/${id}`);
  }

  getByPriceBetween(from :any  , to:any): Observable<ProductsBe[]> {
    return this.httpClient.get<ProductsBe[]>(this.API + `/by-price-between?from=${from}&&to=${to}`);
  }

}
