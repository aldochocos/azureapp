import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FakeService } from './fake.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'user-detail',
    templateUrl : './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {

    users : User[];
    user : User;
    public url : string = 'http://rosymarti.azurewebsites.net/api/information/get';
    cadena : string;
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor (
       private fakeService: FakeService,
       private route : ActivatedRoute,
       private location: Location,
       private http : Http
       
   ) {}

    ngOnInit(): void {

        this.users = this.fakeService.getUsersSync();  
        
        this.route.params
            .switchMap((params: Params) => this.fakeService.getUser(+params['id']))
            .subscribe(user => this.user = user); 

        console.log('esta es la url configurada: ' + this.url);
        this.http.get(this.url, { headers : this.headers })
               .toPromise()
               .then(function (response) {
                   console.log(response);
                    //this.cadena = response
               });
    }

    goBack() : void {
        this.location.back();
    }
}