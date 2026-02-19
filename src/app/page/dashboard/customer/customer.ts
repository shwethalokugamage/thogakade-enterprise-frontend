import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CustomerModel } from '../../model/type';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  customerList: Array<CustomerModel> = [];
  
  constructor(private http:HttpClient){this.getAll();
  }
  getAll(){

    this.http.get<CustomerModel[]>("http://localhost:8080/customer/get-all").subscribe(data=>{
      console.log(data);
      this.customerList=data;
    })
  }
}
