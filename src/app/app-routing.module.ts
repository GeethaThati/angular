import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PassengersComponent } from './passengers/passengers.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { ViewSeatsComponent } from './view-seats/view-seats.component';


const routes: Routes = [
  { path: 'home' ,component:HomeComponent},
  { path: 'view-seats', component:ViewSeatsComponent},
  { path: 'passengers', component:PassengersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
