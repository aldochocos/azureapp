import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { PaymentService } from './services/payment.service';
import { Payment } from './models/payment';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()

@Component({  
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
    
  payments : Payment[];  
  
  constructor(private http: Http, private paymentService: PaymentService, private router: Router) {                                                      
  }

  ngOnInit(): void {
      console.log('hello from payment component');
      this.paymentService.getPayments().then(lista => this.payments = lista); 
  }    
}
