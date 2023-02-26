import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  router:Router;

  
constructor(router:Router,private activatedRouter:ActivatedRoute)
  {
    this.router = router;
   } 

  onSubmit()
  {
    this.router.navigate(['view-book']);
  }

}
