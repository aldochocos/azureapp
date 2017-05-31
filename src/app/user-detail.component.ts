import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Anio } from './models/anio';
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
    anios : Anio[];
    public url : string = 'http://rosymarti.azurewebsites.net/api/information/obteneranios';
    public cadena : string = "loading..";
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
            
        //console.log('esta es la url configurada: ' + this.url);
        this.getAnios().then(lista => this.anios = lista);        
        //this.getCadenas().then(info => this.cadena = info);               
    }

    goBack() : void {
        this.location.back();
    }

    getCadenas() : Promise<string> {
        return this.http.get(this.url, { headers : this.headers })
               .toPromise()
               .then(r => r.json().data as string)
               .catch(this.handleError);
    }

    getAnios() : Promise<Anio[]> {
        return this.http.get(this.url, { headers : this.headers})
               .toPromise()
               .then(r => r.json().data as Anio[])
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}