import { Injectable } from '@angular/core';
import { Tripbooking } from './tripbooking';
import { HttpClient } from '@angular/common/http';
import { TripDTO } from './trip-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TboperationsService {

  //endpoint:String = 'https://jsonplaceholder.typicode.com/posts';
  baseURL = 'http://localhost:2004';
  insertTrip:string = this.baseURL+'/api/tripbooking/register';
  //tripBooking = this.baseURL+'/api/tripbooking/register/1/4';
  allTripsByUser:string = this.baseURL+'/api/tripbooking/alltripsbyuser';
  allTrips:string = this.baseURL+'/api/tripbooking/alltrips';
  allTripsByDriver:string = this.baseURL+'/api/tripbooking/alltripsbydriver'

  constructor(private http:HttpClient) 
  {

  }

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

  createTrip(tripbooking:Tripbooking,userId:number,driverId:number):Observable<TripDTO[]>
  {
    console.log("Tripbooking service - create trip called");
    this.insertTrip = this.insertTrip+'/'+userId;
    console.log("After adding userId "+this.insertTrip);
    this.insertTrip = this.insertTrip+'/'+driverId;
    return this.http.post<TripDTO[]>(`${this.insertTrip}`,tripbooking);
    
  }


  getAllTripsFromSpring():Observable<TripDTO[]>
  {
    console.log("inside service : "+this.allTrips);
      return this.http.get<TripDTO[]>(`${this.allTrips}`);
  }

  getAllTripsByUserFromSpring(userId:number):Observable<TripDTO[]>
  {
    console.log("inside service : "+this.allTripsByUser);
    this.allTripsByUser=this.allTripsByUser+'/'+userId;
    console.log("After adding name 2 "+this.allTripsByUser);
     let a:string = this.allTripsByUser;
     this.allTripsByUser = this.baseURL+'/api/tripbooking/alltripsbyuser';
    return this.http.get<TripDTO[]>(`${a}`);
  }

  getAllTripsByDriverFromSpring(driverId:number):Observable<TripDTO[]>
  {
    console.log("inside service : "+this.allTripsByDriver);
    this.allTripsByDriver=this.allTripsByDriver+'/'+driverId;
    console.log("After adding name 2 "+this.allTripsByDriver);
    let a : string = this.allTripsByDriver;
    this.allTripsByDriver = this.baseURL+'/api/tripbooking/alltripsbydriver';
    return this.http.get<TripDTO[]>(`${a}`);
  }

  


 
}
