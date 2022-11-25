import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
const myRouter:Routes=[
  {
  path:"",
  component:AddItemComponent
  },
  {
    path:"view",
    component:ViewItemComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ViewItemComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
