export class DriverDto {

    driverName:string;
    licenceNo:string;
    rating:number;
    category:string;
    city:string;
    experience:number;
    nativeLanguage:string;


     constructor(
         driverName:string,
         licenceNo:string,
         rating:number,
         category:string,
         city:string,
         experience:number,
         nativeLanguage:string,

     )
     {
         this.driverName = driverName;
         this.licenceNo = licenceNo;
         this.rating = rating;  
         this.category = category;
         this.city = city;
         this.experience = experience;
         this.nativeLanguage = nativeLanguage;

     }
}
