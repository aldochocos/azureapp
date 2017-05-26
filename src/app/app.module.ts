import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';

import { FakeService } from  './fake.service';


@NgModule({
  declarations: [
    AppComponent, UserComponent, UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule         
  ],
  providers: [ FakeService ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
