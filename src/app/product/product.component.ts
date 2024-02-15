import { Component, OnInit } from '@angular/core';
import {product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  //implements OnInit{
  {
  searchValue: number = 0;
    prixMax!:number;
  listProduct: product[] = [
    { id: 1, title: 'Product 1', price: 100, quantite: 10, like: 0 },
    { id: 2, title: 'Product 2', price: 200, quantite: 20, like: 0 },
    { id: 3, title: 'Product 3', price: 300, quantite: 30, like: 0 }
  ];
/*
  ngOnInit(): void {
    this.listProduct = [
      { id: 1, title: 'Product 1', price: 100, quantite: 10, like: 0 },
      { id: 2, title: 'Product 2', price: 200, quantite: 20, like: 0 },
      { id: 3, title: 'Product 3', price: 300, quantite: 30, like: 0 }
    ];

  }*/
  incrementCounter(id: number) {
    this.listProduct[id].like++;
  }

  decrementButton(id: number) {
    if (this.listProduct[id].quantite > 0) {
      this.listProduct[id].quantite--;
    }
  }


    protected readonly product = product;
  }
