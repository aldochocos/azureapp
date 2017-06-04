import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';
import { PaymentComponent } from './payment.component';

import { FakeService } from  './fake.service';
import { PaymentService } from './services/payment.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, UserComponent, UserDetailComponent, PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()         
  ],
  providers: [ FakeService, PaymentService ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
