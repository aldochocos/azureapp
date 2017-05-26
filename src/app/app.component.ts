import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  url = "https://requestb.in/10lpslj1";
  title = 'app works!';
  info : string = "empty";

  constructor(private http: Http) {
                                                      
  }

  ngOnInit(): void {
      this.http.get(this.url)
     .toPromise()
     .then(() => this.info);
    }
}
