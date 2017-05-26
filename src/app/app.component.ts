import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { FakeService } from './fake.service';
import { User } from './user';
import { Comment } from './comment';

import 'rxjs/add/operator/toPromise';

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  url = "https://requestb.in/166sz7c1";
  title = 'app works!';
  info : string = "empty";
  users : User[];
  comments: Comment[];

  constructor(private http: Http, private fakeService: FakeService) {
                                                      
  }

  ngOnInit(): void {
      this.fakeService.getUsers().then(x => this.users = x);
      this.fakeService.getComments().then(x => this.comments = x);
    }
}
