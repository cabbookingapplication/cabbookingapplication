import { Injectable } from '@angular/core';
import { Tripbooking } from './tripbooking';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

  tripArr:Tripbooking[] = [];

  addTrip(tripFromUser:Tripbooking)
  {
    this.tripArr.push(tripFromUser); 
    console.log("Inside booking Service : Trip Added "+tripFromUser);
    console.log(" Total Trips Are :- "+this.tripArr.length);

  }

  getTripArr():Tripbooking[]
  {
    return this.tripArr;
  }

 
}
