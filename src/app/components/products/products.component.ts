import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []



  constructor(private productsService: ProductsService, private primengConfig: PrimeNGConfig) {
    productsService.getAll().then(r => {
      this.products = r
      console.log(this.products)
    }).catch(err => console.log(err))
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
