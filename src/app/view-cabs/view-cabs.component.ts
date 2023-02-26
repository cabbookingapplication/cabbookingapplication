import { Component } from '@angular/core';
import { Cab } from '../cab';
import { CabDto } from '../cab-dto';
import { CaboperationsService } from '../caboperations.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-cabs',
  templateUrl: './view-cabs.component.html',
  styleUrls: ['./view-cabs.component.css']
})
export class ViewCabsComponent {

  //cab: Cab = new Cab(0,'',0,'');

  cab:CabDto = new CabDto(0,'',0,'');

  allCabsInDB: CabDto[] = [];

  constructor(private cabService: CaboperationsService, private http:HttpClient) {

  }


  getCabById(cId:string) {
    let searchId:number=parseInt(cId)
    this.cabService.getCabById(searchId).subscribe(
      data => {
        console.log("data :- " + data);

        this.cab = data;
      }, err => {
        console.log("error from spring ", err);

      }
    );
  }

  getCabsByCityName(cityName: string) {
    this.cabService.getCabByCityName(cityName).subscribe(
      data => {
        console.log("data :- " + data);

        this.allCabsInDB = data;
      }, err => {
        console.log("error from spring ", err);

      }
    );
  }

  
}
