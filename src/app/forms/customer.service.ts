import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';


@Injectable()
export class CustomerService{
    private baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    createCustomer(customer: Customer): Observable<Object> {
        return this.http.post(`${this.baseUrl}`,customer);
    }

}