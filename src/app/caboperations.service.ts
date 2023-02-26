import { Injectable } from '@angular/core';
import { Cab } from './cab';
import { CabDto } from './cab-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaboperationsService {

  baseURL:string = 'http://localhost:2004/api/cab';
  addcabEndPoint:string=this.baseURL+'/insertcab';
  updatePerkmRatebyIdEndPoint:string=this.baseURL+'/updatecab/cabId/price';
  cabByCityNameEndPoint:string=this.baseURL+'/cn';
  cabByIdEndPoint:string=this.baseURL+'/cabId'
  
  //localhost:9023/api/cab/cn/Nashik

  constructor(private http:HttpClient) { }

 addCab(cab: Cab):Observable<Cab> {

  console.log("inside method 1 : Cab Added" +cab);
  
  return this.http.post<Cab>(`${this.addcabEndPoint}`,cab);
  
}
updatePerkmRatebyId(cabId:number,perKmRate:number,cab:Cab):Observable<Cab>
  {
    console.log("");
    this.updatePerkmRatebyIdEndPoint = this.updatePerkmRatebyIdEndPoint+'/'+cabId;
    console.log("after adding cabId"+this.updatePerkmRatebyIdEndPoint);
    this.updatePerkmRatebyIdEndPoint = this.updatePerkmRatebyIdEndPoint+'/'+perKmRate;

    return this.http.put<Cab>(`${this.updatePerkmRatebyIdEndPoint}`,cab);
  }

  getCabByCityName(cityName: string): Observable<CabDto[]> {
    console.log("Inside Method 1 " + this.cabByCityNameEndPoint);
    this.cabByCityNameEndPoint = this.cabByCityNameEndPoint + '/' + cityName;
    console.log("After adding city 2 " + this.cabByCityNameEndPoint);

    return this.http.get<CabDto[]>(`${this.cabByCityNameEndPoint}`);
  }

  getCabById(cabId: number): Observable<CabDto> {
    console.log("Inside Method 1 " + this.cabByIdEndPoint);
    this.cabByIdEndPoint = this.cabByIdEndPoint + '/' + cabId;
    console.log("After adding city 2 " + this.cabByIdEndPoint);

    return this.http.get<CabDto>(`${this.cabByIdEndPoint}`);
  }

}
