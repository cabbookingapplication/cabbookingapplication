package com.cg.mts.service;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.mts.entities.Cab;
import com.cg.mts.exception.InvalidCabException;
import com.cg.mts.exception.InvalidCabException;
import com.cg.mts.repository.CustomCabRepositoryImpl;
import com.cg.mts.repository.ICabRepository;

@Service
public class CabServiceImpl implements ICabService {

	@Autowired
	ICabRepository cabrepository;

	@Override
	public Cab insertCab(Cab cab) throws Exception {
		if (cab.getCarType().equals("")) {
			throw new InvalidCabException("InValid Cab");
		}

		return cabrepository.save(cab);

	}

	@Override
	public Cab updateCab(Cab cab, int perKmRate) {

		return cabrepository.save(cab);

	}

	@Override
	public void DeleteCabbycabId(int cabId) {

		cabrepository.deleteById(cabId);
	}

	@Override
	public List<Cab> getAllCab() {

		return cabrepository.findAll();
		// TODO Auto-generated method stub

	}

	/*
	 * @Override public List<Cab> viewCabsOfType(String carType) throws
	 * CabNotFoundException { List<Cab> cabList = new ArrayList<Cab>();; // TODO
	 * Auto-generated method stub return cabList; }
	 * 
	 * @Override public int countCabsOfType(String carType) throws
	 * CabNotFoundException { // TODO Auto-generated method stub return 0; }
	 */

}
