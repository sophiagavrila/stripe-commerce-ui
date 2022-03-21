import { Product } from './../common/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'; // from reactive JS

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  // This method maps the JSON data from Spring Data Rest service to a Product array
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

// This unwraps the JSON from Spring Data REST _embedded entry
interface GetResponse { // makes use of the _embedded entry that is returned by Spring
  _embedded: {
    products: Product[];
  }
}
