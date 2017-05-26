import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FakeService } from './fake.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'user-detail',
    templateUrl : './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

    user : User;

    constructor (
       private fakeService: FakeService,
       private route : ActivatedRoute,
       private location: Location
   ) {}

    ngOnInit(): void {
                
        this.route.params
            .switchMap((params: Params) => this.fakeService.getUser(+params['id']))
            .subscribe(user => this.user = user);                    
    }

    goBack() : void {
        this.location.back();
    }
}