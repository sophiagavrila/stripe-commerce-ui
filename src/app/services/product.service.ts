import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'; // from reactive JS
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = `${url}products`; // == to http://localhost:8080/api/products

  constructor(private httpClient: HttpClient) { }

  // This method maps the JSON data from Spring Data Rest service to a Product array
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.productUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

// This unwraps the JSON from Spring Data REST _embedded entry
interface GetResponse { // makes use of the _embedded entry that is returned by Spring
  // inside of the _embedded property are a bunch of objects that match up with the Product model we built in Angular
  _embedded: {
    products: Product[];
  }
}
