import { Component } from '@angular/core';
import { Cab } from '../cab';
import { CaboperationsService } from '../caboperations.service';
import { CabDto } from '../cab-dto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-cab',
  templateUrl: './update-cab.component.html',
  styleUrls: ['./update-cab.component.css']
})
export class UpdateCabComponent {

  model: Cab = new Cab(0,"",0,"");
  submitted = false;
  success = false;
  error = false;
  status = false;
  message = '';

  constructor(private caboperations: CaboperationsService ,private http:HttpClient) {}
  onSubmit() {
  this.caboperations.updatePerkmRatebyId(this.model.cabId,this.model.perKmRate,this.model).subscribe(

    data=>{
      this.status=true;
      this.message="cab updated";

    },
    error=>{

    }

  )

  

 
}


}
