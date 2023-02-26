export class TripDTO {
   tripId : number;
	userId : number;
	userName : string;
	phoneNumber : number;
	gender : string;
	driverId : number;
	licenceNo : string;
	nativeLanguage : string;
	fromLocation : string;
	toLocation : string;
	fromDateTime : string;
	toDateTime : string;
	status : string;
	totalbillAmount : number;
	distanceInKm : number;
   

   constructor(
      tripId : number,
      userId : number,
      userName : string,
      phoneNumber : number,
      gender : string,
      driverId : number,
      licenceNo : string,
      nativeLanguage : string,
      fromLocation : string,
      toLocation : string,
      fromDateTime : string,
      toDateTime : string,
      status : string,
      totalbillAmount : number,
      distanceInKm : number,
   )
   {
      this.tripId = tripId
      this.userId = userId;
      this.userName = userName;
      this.phoneNumber = phoneNumber;
      this.gender = gender;
      this.driverId = driverId;
      this.licenceNo = licenceNo;
      this.nativeLanguage = nativeLanguage;
      this. fromLocation= fromLocation;
      this.toLocation = toLocation;
      this.fromDateTime = fromDateTime;
      this.toDateTime = toDateTime;
      this.status = status;
      this.totalbillAmount = totalbillAmount;
      this.distanceInKm = distanceInKm;
   
    
   }
}
