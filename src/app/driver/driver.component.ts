import { Component } from '@angular/core';
import { Driver } from '../driver';
import { DriverOperationService } from '../driver-operation.service';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {

  c:Driver = new Driver('','','',0,'',0,'');
  submitted = false;
  success = false;
  error = false;
  status = false;
  message = '';
  constructor(private driverservice: DriverOperationService) {}
  onSubmit() {

    this.driverservice.addDriver(this.c).subscribe(
      data=>{
        this.status=true;
        this.message="Driver added";
      },
      error=>{
      }
    )
  }

}
