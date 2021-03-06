import { Injectable } from '@angular/core';
import { User } from './user';
import { Post } from './models/post';
import { USERS } from './mock-users';
import { Comment } from './comment';
import { Headers, Http } from '@angular/http';
import { Anio } from './models/anio';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FakeService {
    urlUsers = 'https://jsonplaceholder.typicode.com/users';
    urlComments = 'https://jsonplaceholder.typicode.com/comments';
    urlPosts = 'https://jsonplaceholder.typicode.com/posts';
    urlAnios : string = 'http://rosymarti.azurewebsites.net/api/information/obteneranios';
    headers = new Headers({'Content-Type': 'application/json'});
    users : User[];
    userFound : User;
    
    constructor(private http: Http) { }

    getUsersSync() : User[] {
        return USERS;
    }

    getUser(id: number) : Promise<User> {

        return new Promise(resolve => {
            resolve(USERS.find(a => a.id == id));
        }) ; 
        // var info = new Promise<User>(function() {
        //     //this.userFound = USERS.find(a => a.id == id);
        // }).then(response => response = USERS[0]);

        // console.log('id: ' + id);        
        // console.log(info);

        // return info;
    }
   
    getComments(): Promise<Comment[]> {
        return this.http.get(this.urlComments)
               .toPromise()
               .then(a => a.json() as Comment[]);
               
    }

    getUsers(): Promise<User[]> {
        return this.http.get(this.urlUsers)
               .toPromise()
               .then(a => a.json() as User[])
               .catch(this.handleError);
               
    }

    getAnios(): Promise<Anio[]> {
        return this.http.get(this.urlAnios)
               .toPromise()
               .then(response => response.json() as Anio[])               
               .catch(this.handleError);
    }

    getPosts(): Promise<Post[]> {
        return this.http.get(this.urlPosts)
               .toPromise()
               .then(a => a.json() as Post[])               
               .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
  }
}