import { Injectable } from '@angular/core';
import { Driverreview } from './driverreview';
import { DriverReviewDto } from './driver-review-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriveroperationsService {

  baseURL:String='http://localhost:2004';
  submitReviewEndPoint:string=this.baseURL+ '/DriverReview/register';
  ReviewByDriverNameEndPoint:string=this.baseURL+'/app/by';



  constructor(private http:HttpClient) { }

getReviewByDriverName(driverName:string):Observable<DriverReviewDto[]>{
  console.log("inside method 1" +this.ReviewByDriverNameEndPoint);
    this.ReviewByDriverNameEndPoint= this.ReviewByDriverNameEndPoint+'/'+driverName;
    console.log("after getting review 2"+ this.ReviewByDriverNameEndPoint);

    return this.http.get<DriverReviewDto[]>(`${this.ReviewByDriverNameEndPoint}`);
   }
   submitDriverReview(driverReview: Driverreview):Observable<Driverreview> {

    console.log("inside method 1 : Review added" +driverReview);

    return this.http.post<Driverreview>(`${this.submitReviewEndPoint}`,driverReview);

  }
}
