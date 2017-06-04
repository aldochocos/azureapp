import { Injectable } from '@angular/core';
import { Payment } from '.././models/payment';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PaymentService {
    urlPayments = 'http://rosymarti.azurewebsites.net/api/informacion/pagos';    
    headers = new Headers({'Content-Type': 'application/json'});
    //payments : Payment[];
        
    constructor(private http: Http) { }
           
    getPayments(): Promise<Payment[]> {
        return this.http.get(this.urlPayments)
               .toPromise()
               .then(a => a.json() as Payment[])               
               .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
  }
}