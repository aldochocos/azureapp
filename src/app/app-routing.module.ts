import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';


const routes: Routes = [    
    { path: 'detail/:id', component: UserDetailComponent },
    { path: 'users', component: UserComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
