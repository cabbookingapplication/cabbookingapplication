import { Component } from '@angular/core';
import { DriveroperationsService } from '../driveroperations.service';
import { Driverreview } from '../driverreview';

@Component({
  selector: 'app-driver-review',
  templateUrl: './driver-review.component.html',
  styleUrls: ['./driver-review.component.css']
})
export class DriverReviewComponent {
  model: Driverreview = new Driverreview('',0,'');
  submitted = false;
  success = false;
  error = false;
  numberOfStars = [1, 2, 3, 4, 5];
  status = false;
  message = '';
  constructor(private flightReviewService: DriveroperationsService) {}

  onSubmit() {
    this.flightReviewService.submitDriverReview(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="data review submitted";

      },
      error=>{

      }

    )




  }
  

        

}




