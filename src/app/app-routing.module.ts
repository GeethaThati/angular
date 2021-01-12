import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBusComponent } from './view-bus/view-bus.component';


const routes: Routes = [
  { path: 'home' ,component:HomeComponent},
  { path: 'view-bus',component:ViewBusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
