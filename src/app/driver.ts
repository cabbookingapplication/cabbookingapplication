export class Driver {

    driverName:string;
    licenceNo:string;
    category:string;
    rating:number;
    city:string;
    experience:number;
    nativeLanguage:string;
    
     constructor(
        driverName:string,
        licenceNo:string,
        category:string,
        rating:number,
        city:string,
        experience:number,
        nativeLanguage:string,
         
     )
     {
         this.driverName = driverName;
         this.licenceNo = licenceNo;
         this.category = category;
         this.rating = rating;
         this.city = city;
         this.experience = experience;  
         this.nativeLanguage = nativeLanguage;
     }
}
