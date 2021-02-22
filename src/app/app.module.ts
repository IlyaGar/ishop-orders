
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersFormComponent } from './orders-manager/orders-form/orders-form.component';
import { SelectShopComponent } from './orders-manager/select-shop/select-shop.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './common/models/material-moules';

@NgModule({
  declarations: [
    AppComponent,
    OrdersFormComponent,
    SelectShopComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [HttpClient,],
  bootstrap: [AppComponent]
})
export class AppModule { }
