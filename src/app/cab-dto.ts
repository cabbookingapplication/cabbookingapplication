export class CabDto {

    cabId: number;
    carType: string;
    perKmRate: number;
    cityName: string;

    constructor(

        cabId: number,
        carType: string,
        perKmRate: number,
        cityName: string
    ) 
    {
        this.cabId = cabId;
        this.carType = carType;
        this.cityName = cityName;
        this.perKmRate = perKmRate;
    }
}
