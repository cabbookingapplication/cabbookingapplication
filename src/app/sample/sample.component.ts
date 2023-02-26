import { Component } from '@angular/core';
import { TboperationsService } from '../tboperations.service';
import { TripDTO } from '../trip-dto';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  x : TripDTO = new TripDTO(0,0,'',0,'',0,'','','','','','','',0,0);
  alltrips : TripDTO[] = [];
  router:Router;
  constructor(private tripService:TboperationsService,router:Router,private activatedRouter:ActivatedRoute)
  {
    this.router = router;
  }

  getAlltrips()
  {
    this.tripService.getAllTripsFromSpring().subscribe(
      data=>{
        console.log("data :-"+data);
        this.alltrips = data;
      },err=>{
        console.log("error from spring", err);
        
      }
    );
  }


  getAlltripsByUser(userId:string)
  {
    let UserId:number=parseInt(userId);
    this.tripService.getAllTripsByUserFromSpring(UserId).subscribe(
      data=>{
        console.log("data :-"+data);
        this.alltrips = data;
      },err=>{
        console.log("error from spring", err);
        
      }
    );
  }

  getAlltripsByDriver(driverId:string)
  {
    let DriverId:number=parseInt(driverId);
    this.tripService.getAllTripsByDriverFromSpring(DriverId).subscribe(
      data=>{
        console.log("data :-"+data);
        this.alltrips = data;
      },err=>{
        console.log("error from spring", err);
        
      }
    );
  }

  goTo()
  {
    this.router.navigate(['rating']);
  }





}
