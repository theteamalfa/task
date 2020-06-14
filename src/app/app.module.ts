import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { GalleryDisplayComponent } from './gallery-display/gallery-display.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarPageComponent,
    LoginFormComponent,
    AddCustomerComponent,
    GalleryDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
