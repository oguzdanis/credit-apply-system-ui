import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

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
  }

  constructor() { }

  ngOnInit(): void {
  }

}
