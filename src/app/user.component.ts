import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { FakeService } from './fake.service';
import { User } from './user';
import { Comment } from './comment';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()

@Component({  
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    
  users : User[];  
  selectedUser: User;

  constructor(private http: Http, private fakeService: FakeService, private router: Router) {                                                      
  }

  ngOnInit(): void {
      this.users = this.fakeService.getUsersSync();      
  }
  
  edit (user : User) : void 
  {    
    this.router.navigate(['/detail', user.id]);
  } 

  details (user : User): void
  {
    
  }
}
