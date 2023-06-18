import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/models/products.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: ProductResponse) => {
      console.log('Http request is successful')      
      console.log(products);       
    }, (error) => {
      console.log('Http request failed')   
      console.error(error);
    });
  }

}
