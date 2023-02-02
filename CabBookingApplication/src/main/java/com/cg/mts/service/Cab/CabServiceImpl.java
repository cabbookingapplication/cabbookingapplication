package com.cg.mts.service.Cab;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.mts.entities.Cab;
import com.cg.mts.exception.CabNotFoundException;
import com.cg.mts.repository.Cab.CustomCabRepositoryImpl;
import com.cg.mts.repository.Cab.ICabRepository;

@Service
public class CabServiceImpl implements ICabService {
	
	
	@Autowired
	ICabRepository cabrepository;
	
	@Override
	public Cab insertCab(Cab cab) {
		
			return cabrepository.save(cab);
		
	}
	
	@Override
	public Cab updateCab(Cab cab, int perKmRate) {
		
			return cabrepository.save(cab);
		
	}


	@Override
	public List<Cab> viewCabsOfType(String carType) throws CabNotFoundException {
		List<Cab> cabList = new ArrayList<Cab>();;
		// TODO Auto-generated method stub
		return cabList;
	}

	@Override
	public int countCabsOfType(String carType) throws CabNotFoundException {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void DeleteCabbycabId(int cabId)throws CabNotFoundException {

		cabrepository.deleteById(cabId);
	}

	@Override
	public List<Cab> getAllCab() {
		return cabrepository.findAll();
		// TODO Auto-generated method stub
		
	}

	
	
}
	
	

	