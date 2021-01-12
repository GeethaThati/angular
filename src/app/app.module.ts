import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewSeatsComponent } from './view-seats/view-seats.component';
import { PassengersComponent } from './passengers/passengers.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusRouteComponent } from './update-bus-route/update-bus-route.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ViewSeatsComponent,
    PassengersComponent,
    SearchBusComponent,
    ViewBusComponent,
    AddBusComponent,
    UpdateBusRouteComponent,
    DeleteBusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
