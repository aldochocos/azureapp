import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Anio } from './models/anio';
import { Post } from './models/post';
import { FakeService } from './fake.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Headers, Http } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'user-detail',
    templateUrl : './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {

    public users : User[];
    public user : User;
    public anios : Anio[];
    public posts : Post[];
    public url : string = 'http://rosymarti.azurewebsites.net/api/information/obteneranios';
    public urlPosts = 'https://jsonplaceholder.typicode.com/posts';
    public cadena : string = "loading..";
    private headers = new Headers({'Content-Type': 'application/json'});
    closeResult: string;

    constructor (
       private fakeService: FakeService,
       private route : ActivatedRoute,
       private location: Location,
       private http : Http,
       private modalService : NgbModal
       
   ) {}

    ngOnInit(): void {

        this.fakeService.getPosts().then(lista => this.posts = lista);         
        this.fakeService.getAnios().then(lista => this.anios = lista);      
        //this.users =
        //this.fakeService.getUsers().then(r => this.users = r); //.getUsersSync();  
        
        this.route.params
            .switchMap((params: Params) => this.fakeService.getUser(+params['id']))
            .subscribe(user => this.user = user); 
            
        
        //console.log('esta es la url configurada: ' + this.url);
        //  let infor = this.getAnios();
        //  console.log(infor);
        // this.getAnios().then(lista => this.anios = lista);                    
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

    open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
        } else {
        return  `with: ${reason}`;
        }
    }

    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}