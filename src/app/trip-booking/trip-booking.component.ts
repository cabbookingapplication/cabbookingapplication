import { Component } from '@angular/core';
import { TboperationsService } from '../tboperations.service';
import { TripService } from '../trip.service';
import { Tripbooking } from '../tripbooking';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ViewBookComponent } from '../view-book/view-book.component';

@Component({
  selector: 'app-trip-booking',
  templateUrl: './trip-booking.component.html',
  styleUrls: ['./trip-booking.component.css']
})
export class TripBookingComponent {

  t : Tripbooking = new Tripbooking('','','24/2/2023,12.30','24/2/2023,1.30',true,8,100);
  allTrips : Array<Tripbooking> = [];
  router:Router;

  
constructor(private tripService:TboperationsService,router:Router,private activatedRouter:ActivatedRoute)
  {
    this.tripService = tripService;
    this.allTrips = this.tripService.getTripArr();
    this.router = router;
   } 


ngOnInit(): void {
  }

  submitForm()
  {
    console.log("form submit button clicked");
    console.log(this.t);
    this.doSaveTOServer();
  }

  doSaveTOServer()
  {
    let toDateTime = new Date();
    let todayDate:Date = new Date();
    let stringDate:string = todayDate.getFullYear()+''+todayDate.getMonth()+''+todayDate.getDay()+''+todayDate.getHours();
    console.log("t  "+stringDate+"");
    this.tripService.createTrip(this.t,6,7).subscribe(
      data=>{
        console.log("Data Saved !!" +data);        
      },
      error=>{
        console.log(error);
        
      }
     
    )
    this.router.navigate(['view-book']);
  }

  
}  
  











