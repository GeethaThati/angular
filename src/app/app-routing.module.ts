import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PassengersComponent } from './passengers/passengers.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateBusRouteComponent } from './update-bus-route/update-bus-route.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { ViewSeatsComponent } from './view-seats/view-seats.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { PaymentComponent } from './payment/payment.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { StopsComponent } from './stops/stops.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MyTripsComponent } from './my-trips/my-trips.component';


const routes: Routes = [
  { path: 'home' ,component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'thankyou',component:ThankyouComponent},
  { path: 'view-seats', component:ViewSeatsComponent},
  { path: 'passengers', component:PassengersComponent},
  { path: 'view-bus',component:ViewBusComponent},
  { path: 'admin-options', component:AdminOptionsComponent},
  { path: 'admin-options/add-bus',component:AddBusComponent},
  { path: 'admin-options/update-bus-route', component:UpdateBusRouteComponent},
  { path: 'passengers', component:PassengersComponent},
  { path: 'search-bus', component:SearchBusComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'signin', component:SigninComponent},
  { path: 'admin-login', component:AdminLoginComponent},
  { path: 'login', component:LoginComponent},
  { path: 'dashboard',component:DashboardComponent},
  { path: 'register',component:RegisterComponent},
  { path: 'admin-options/add-route',component:AddRouteComponent},
  { path: 'payment', component:PaymentComponent},
  { path: 'cancel-ticket', component:CancelTicketComponent},
  { path: 'admin-options/stops', component:StopsComponent},
  { path: 'footer', component:FooterComponent},
  { path: 'dashboard/profile', component:ProfileComponent},
  { path: 'dashboard/update-profile', component:UpdateProfileComponent},
  { path: 'dashboard/my-trips', component:MyTripsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  