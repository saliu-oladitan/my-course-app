import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import {Observable} from "rxjs"
import { Product, ProductResponse } from "../models/products.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly apiUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) {    
    }

    getProducts(): Observable<ProductResponse>{
        return this.http.get<ProductResponse>(this.apiUrl + 'products');
    }
}