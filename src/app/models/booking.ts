import { Passenger } from "./passenger";

export class Booking{
    passenger:Passenger =new Passenger();
    routeId : number;
    userId :number;
    passengers : Passenger[];
}