import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';
import { PaymentComponent } from './payment.component';

const routes: Routes = [    
    { path: 'detail/:id', component: UserDetailComponent },
    { path: 'users', component: UserComponent },
    { path: 'payments', component: PaymentComponent },
    { path: '', redirectTo: '/payments', pathMatch: 'full'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
