package com.cg.mts.repository;

import java.util.List;

import com.cg.mts.entities.Cab;
import com.cg.mts.exception.CabNotFoundException;

public interface CustomCabRepository {
	
	public Cab insertCab(Cab cab);

	public Cab updateCab(Cab cab, int perKmRate);

	public Cab deleteCab(Cab cab, int id);
	
	public List<Cab> getCabbycategory(String carType);
	
	public Cab updatecategorybycity(String carType, String cityName);
	
}
