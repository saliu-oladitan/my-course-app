import { Component, OnInit } from '@angular/core';
import { Product, ProductResponse } from 'src/app/models/products.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((productResponse: ProductResponse) => {
      console.log('Http request is successful')
      this.products = productResponse.products;  
    }, (error) => {
      console.log('Http request failed')   
      console.error(error);
    });
  }

}
