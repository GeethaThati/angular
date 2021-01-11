import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PassengersComponent } from './passengers/passengers.component';
import { ViewSeatsComponent } from './view-seats/view-seats.component';


const routes: Routes = [
  
  { path: 'home' ,component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
