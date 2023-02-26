import { Component } from '@angular/core';
import { Cab } from '../cab';
import { CaboperationsService } from '../caboperations.service';

@Component({
  selector: 'app-add-cab',
  templateUrl: './add-cab.component.html',
  styleUrls: ['./add-cab.component.css']
})
export class AddCabComponent {

  model: Cab = new Cab(0,"",0,"");
  submitted = false;
  success = false;
  error = false;
  status = false;
  message = '';
  
  constructor(private caboperations: CaboperationsService) {}

  onSubmit() {
    this.caboperations.addCab(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="cab added";

      },
      error=>{

      }

    )

    

   
  }



}
