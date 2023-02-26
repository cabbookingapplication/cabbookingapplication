import { Component } from '@angular/core';
import { TboperationsService } from '../tboperations.service';
import { TripDTO } from '../trip-dto';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-usertrips',
  templateUrl: './usertrips.component.html',
  styleUrls: ['./usertrips.component.css']
})
export class UsertripsComponent {

  x : TripDTO = new TripDTO(0,0,'',0,'',0,'','','','','','','',0,0);
  alltrips : TripDTO[] = [];
  router:Router;
  constructor(private tripService:TboperationsService,router:Router,private activatedRouter:ActivatedRoute)
  {
    this.router = router;
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

  goTo()
  {
    this.router.navigate(['rating']);
  }

}
