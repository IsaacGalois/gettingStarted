import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { IProduct } from '../products/product';

@Injectable()
export class ProductService {
  // private _productUrl = './api/products/products.json';
  private _productUrl = 'assets/products.json';
  private products: IProduct[];

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {

    return this._http.get<IProduct[]>(this._productUrl)
      // .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.getProducts().map(products => products.filter(product => product.productId === id)[0])
      // .do(data => console.log('Selected: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
