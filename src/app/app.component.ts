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
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent implements OnInit {
  
  title = 'Users list';
  users : User[];  
  selectedUser: User;

  constructor(private http: Http, private fakeService: FakeService, private router: Router) {
                                                      
  }

  ngOnInit(): void {
      this.users = this.fakeService.getUsersSync();      
  }

  onSelect(user: User) : void {
    this.selectedUser = user;
  }

  editar (user : User) : void 
  {    
    this.router.navigate(['/detail', user.id]);
  } 
}
