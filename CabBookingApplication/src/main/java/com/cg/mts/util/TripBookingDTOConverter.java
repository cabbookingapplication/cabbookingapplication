package com.cg.mts.util;

import org.springframework.stereotype.Component;

import com.cg.mts.dto.TripBookingDTO;
import com.cg.mts.entities.TripBooking;

@Component
public class TripBookingDTOConverter {
	
	public TripBookingDTO convertTo(TripBooking tripBooking)
	{
		TripBookingDTO obj = new TripBookingDTO();
		obj.setTripId(tripBooking.getTripBookingId());
		obj.setUserId(tripBooking.getUser().getUserId());
		obj.setUserName(tripBooking.getUser().getFirstName()+" "+tripBooking.getUser().getLastName());
		obj.setPhoneNumber(tripBooking.getUser().getPhoneNumber());
		obj.setGender(tripBooking.getUser().getGender());
		obj.setDriverId(tripBooking.getDriver().getDriverId());
		obj.setLicenceNo(tripBooking.getDriver().getLicenceNo());
		obj.setNativeLanguage(tripBooking.getDriver().getNativeLanguage());
		obj.setFromLocation(tripBooking.getFromLocation());
		obj.setToLocation(tripBooking.getToLocation());
		obj.setFromDateTime(tripBooking.getFromDateTime());
		obj.setToDateTime(tripBooking.getToDateTime());
		obj.setStatus(tripBooking.isStatus());
		obj.setTotalbillAmount(tripBooking.getBill());
		obj.setDistanceInKm(tripBooking.getDistanceInKm());
		return obj;
	}
	
}
