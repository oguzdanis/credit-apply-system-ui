import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private http: HttpClient) {}

  customerForm = new FormGroup({
    name: new FormControl,
    surname: new FormControl,
    tckn:new FormControl,
    salary : new FormControl,
    phoneNumber : new FormControl
  });

  customer: Customer;

  onSubmit(){
    this.customer = this.customerForm.value;
    console.log(this.customer);
    this.onCreatePost(this.customer);
  }

  onCreatePost(customer: Customer){
    this.http
    .post("/credit/score/createCustomer",customer)
    .subscribe(responseData => {
      console.log(responseData);
    })
  }

  ngOnInit(): void {
  }

}
