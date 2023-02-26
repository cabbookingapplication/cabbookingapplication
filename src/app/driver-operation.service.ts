import { Injectable } from '@angular/core';
import { Driver } from './driver';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverDto } from './driver-dto';

@Injectable({
  providedIn: 'root'
})
export class DriverOperationService {

  baseURL = 'http://localhost:2004/driver';
  allDriverEndpoint = this.baseURL+'/display';
  addDriverEndPoint:string=this.baseURL+'/register';
  bestDriverEndpoint = this.baseURL+'/bestdrivers';
  driverArr:DriverDto[] = [];
  constructor(private http:HttpClient) {
    console.log("Inside Constructor "+this.allDriverEndpoint);
   }
   getAllDriverFromSpring():Observable<DriverDto[]>
   {
    console.log("inside service : "+this.allDriverEndpoint);
    return this.http.get<DriverDto[]>(`${this.allDriverEndpoint}`);
   }

   addDriver(driver:Driver):Observable<Driver> {
    console.log("inside method 1 : Driver Added" + driver);
    return this.http.post<Driver>(`${this.addDriverEndPoint}`,driver);
  
   }
   getAllBestDriver():Observable<DriverDto[]>
   {
    console.log("inside service : "+this.bestDriverEndpoint);
    return this.http.get<DriverDto[]>(`${this.bestDriverEndpoint}`);
   }
}
