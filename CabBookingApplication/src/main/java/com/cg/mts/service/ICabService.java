package com.cg.mts.service;

import java.util.List;
import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Service;

import com.cg.mts.entities.Cab;
import com.cg.mts.exception.CabNotFoundException;

@Service
public interface ICabService {
	
	public Cab insertCab(Cab cab) throws Exception;
    public List<Cab> getAllCab() ;
    public Cab updateCab(Cab cab, int perKmRate);
    public void DeleteCabbycabId(int cabId);
    public List<Cab> getCabbycategory(String carType);
    public Cab updatecategorybycity(String carType, String cityName);
	public Cab getCabById(int cabId);
	public List<Cab> getCabByCityName(String cityName);
	

	/*
	 * public List<Cab> viewCabsOfType(String carType) throws CabNotFoundException;
	 * public int countCabsOfType(String carType) throws CabNotFoundException;
	 */

	

}
