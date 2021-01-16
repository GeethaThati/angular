import { Bus } from "./Bus";

export class Route{
  id:number;
  source:string;
  destination:string;
  fare:number;
  duration:string;
  dateOfDepature:string;
  dateOfArrival:string;
  seatAvailable:number;
  buses: Bus[];
  
}