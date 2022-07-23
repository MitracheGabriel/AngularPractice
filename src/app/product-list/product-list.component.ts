import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listOfProducts = [...products];

  share(product:Product){
    alert("You've shared "+product.name);
  }

  onNotify() {
    alert('You will be notified when the product goes on sale');
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
