import { Injectable } from '@angular/core';
import { baseUrl } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getProductDetails() {
    return this.http.get(`${this.baseUrl}/get-products`);
  }
}
