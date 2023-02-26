package com.cg.mts.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripBookingDTO {
	
	private int tripId;
	private int userId;
	private String userName;
	private long phoneNumber;
	private String gender;
	private int driverId;
	private String licenceNo;
	private String nativeLanguage;
	private String fromLocation;
	private String toLocation;
	private String fromDateTime;
	private String toDateTime;
	private boolean status;
	private float totalbillAmount;
	private float distanceInKm;

}
