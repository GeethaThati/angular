import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewSeatsComponent } from './view-seats/view-seats.component';
import { PassengersComponent } from './passengers/passengers.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusRouteComponent } from './update-bus-route/update-bus-route.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PaymentComponent } from './payment/payment.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { StopsComponent } from './stops/stops.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ViewSeatsComponent,
    PassengersComponent,
    SearchBusComponent,
    ViewBusComponent,
    ThankyouComponent,
    AddBusComponent,
    UpdateBusRouteComponent,
    DeleteBusComponent,
    AdminLoginComponent,
    AdminOptionsComponent,
    HeaderComponent,
    SigninComponent,
    DashboardComponent,
    RegisterComponent,
    AddRouteComponent,
    PaymentComponent,
    CancelTicketComponent,
    StopsComponent,
    FooterComponent,
    UpdateProfileComponent,
    ProfileComponent,
    MyTripsComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
