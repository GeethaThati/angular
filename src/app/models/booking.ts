import { Passenger } from "./passenger";

export class Booking{
    routeId : number;
    userId :number;
    boarding : string;
    droping : string;
    amount : number;
    busName: string;
    duration: string;
    date: string;
    passengers : Array <Passenger> = new Array<Passenger>();
    constructor(seats : number){
        for(let x=0; x < seats; x++){
            this.passengers.push(new Passenger());
        }
    }
}