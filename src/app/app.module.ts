import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CabComponent } from './cab/cab.component';
import { DriverComponent } from './driver/driver.component';
import { UserComponent } from './user/user.component';
import { TripBookingComponent } from './trip-booking/trip-booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SampleComponent } from './sample/sample.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewBookComponent } from './view-book/view-book.component';
import { FormsModule } from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { DriverReviewComponent } from './driver-review/driver-review.component';
import { AddCabComponent } from './add-cab/add-cab.component';
import { UpdateCabComponent } from './update-cab/update-cab.component';
import { ViewCabsComponent } from './view-cabs/view-cabs.component';
import { UsertripsComponent } from './usertrips/usertrips.component';
import { DriverFilterComponent } from './driver-filter/driver-filter.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { PaymentComponent } from './payment/payment.component';

const allLinks:Routes = [
  {path:'bookyourride',component:TripBookingComponent},
  {path:'viewtripdetails',component:SampleComponent},
  {path:'driver',component:DriverComponent},
  {path:'cab',component:CabComponent},
  {path:'insertcab',component:AddCabComponent},
  {path:'searchcab',component:ViewCabsComponent},
  {path:'updateCab',component:UpdateCabComponent},
  {path:'adddriver',component:DriverComponent},
  {path:'driverlist',component:DriverListComponent},
  {path:'bestdriver',component:DriverFilterComponent},
  {path:'view-book',component:ViewBookComponent},
  {path:'login',component:LoginComponent},
  {path:'admin/:name',component:Page2Component},
  {path:'rating',component:DriverReviewComponent},
  {path:'usertrips',component:UsertripsComponent},
  {path:'payment',component:PaymentComponent},

  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CabComponent,
    DriverComponent,
    UserComponent,
    TripBookingComponent,
    HomepageComponent,
    HeaderComponent,
    LoginComponent,
    SampleComponent,
    ViewBookComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    DriverReviewComponent,
    AddCabComponent,
    UpdateCabComponent,
    ViewCabsComponent,
    UsertripsComponent,
    DriverFilterComponent,
    DriverListComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(allLinks)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
