import { Stop } from "./Stop";

export class AddStop{
    routeId : number;
    stops : Array <Stop> = new Array<Stop>();
    constructor(i : number){
        for(let x=0; x < i; x++){
           this.stops.push(new Stop());
        }
    }
}