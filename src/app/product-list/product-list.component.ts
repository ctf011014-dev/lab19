import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor() {
    this.products = [];
    this.products.push(
      {name: "มะม่วง", price: 100
    });
    this.products.push(
      {name: "มะนาว", price: 200
    });
    this.products.push(
      {name: "มะพร้าว", price: 150
    });
   }

  ngOnInit(): void {
  }
  selectedProduct(product: Product) {
    alert(product.name);
  }
}
