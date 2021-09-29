import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURL = "https://fakestoreapi.com/products"

  getAll() {
    return axios.get(this.apiURL).then(r => r.data).catch(err => console.log(err))
  }

  constructor() {


  }
}
