import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PassengersComponent } from './passengers/passengers.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateBusRouteComponent } from './update-bus-route/update-bus-route.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { ViewSeatsComponent } from './view-seats/view-seats.component';


const routes: Routes = [
  { path: 'home' ,component:HomeComponent},
  { path: 'view-seats', component:ViewSeatsComponent},
  { path: 'passengers', component:PassengersComponent},
  { path: 'view-bus',component:ViewBusComponent},
  { path: 'admin-options', component:AdminOptionsComponent},
  { path: 'add-bus',component:AddBusComponent},
  { path: 'update-bus-route', component:UpdateBusRouteComponent},
  { path: 'passengers', component:PassengersComponent},
  { path: 'search-bus', component:SearchBusComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'signin', component:SigninComponent},
  { path: 'admin-login', component:AdminLoginComponent},
  { path: 'login', component:LoginComponent},
  { path: 'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
