package com.cg.mts.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.mts.dto.CabDTODefaultResponse;
import com.cg.mts.entities.Cab;
import com.cg.mts.exception.CabNotFoundException;
import com.cg.mts.service.ICabService;
import com.cg.mts.util.CabDTOConvertor;

@RestController
@RequestMapping("/api/cab")
@CrossOrigin(origins = {"http://localhost:4200/","http://localhost:2004/"},allowedHeaders = "*")
public class CabController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private ICabService iCabService;

	@Autowired
	CabDTOConvertor dtoConvertor;


	@GetMapping("/list")
	public ResponseEntity<List<CabDTODefaultResponse>> getAllCab() {
		List<Cab> allCabsInDB = iCabService.getAllCab();

		List<CabDTODefaultResponse> dtoList = new ArrayList<>();
		for (Cab cab : allCabsInDB) 
		{
			CabDTODefaultResponse dtoObj = dtoConvertor.convertTo(cab);
			dtoList.add(dtoObj);
		}

		return new ResponseEntity<List<CabDTODefaultResponse>>(dtoList, HttpStatus.OK);
	}

	@GetMapping("/carType/{carType}/city/{cityName}")
	public ResponseEntity<List<CabDTODefaultResponse>> getCabbycategory(@PathVariable String carType,
			@PathVariable String cityName) {
		List<Cab> allCabsInDB = iCabService.getAllCab();
		List<CabDTODefaultResponse> outputList = new ArrayList<>();

		for (Cab cab : allCabsInDB) {
			if (cab.getCarType().equals(carType) && cab.getCityName().equals(cityName)) {
				CabDTODefaultResponse dtoObj = dtoConvertor.convertTo(cab);
				outputList.add(dtoObj);

			} // end of if

		} // end of for

		return new ResponseEntity<List<CabDTODefaultResponse>>(outputList, HttpStatus.OK);
	}// endofgetCabbycategory

	@PostMapping("/insertcab")
	public Cab insertCab(@RequestBody Cab cab) throws Exception {
		return iCabService.insertCab(cab);
	}

	@PutMapping("/updatecab/{cabId}/price/{perKmRate}")
		public String updateCabWithperKmRate(@RequestBody Cab cab, @PathVariable int cabId, @PathVariable int perKmRate) {
		Cab updateCab = iCabService.updateCab(cab,perKmRate);

		if (updateCab() != null) {
			return updateCab.toString();
		}
		return "Updated : - " + updateCab.toString() + " ";
	}

	private Object updateCab() {
		// TODO Auto-generated method stub
		return null;
	}

	@DeleteMapping("/{cabId}")
	public void DeleteCabbyId(@PathVariable int cabId) {
		iCabService.DeleteCabbycabId(cabId);
	}
	
	
	@GetMapping("/cabId/{cabId}")
	public ResponseEntity<CabDTODefaultResponse> getCabById(@PathVariable int cabId) {
		
		Cab savedCab = iCabService.getCabById(cabId);
		CabDTODefaultResponse dto = dtoConvertor.convertTo(savedCab);
		return new ResponseEntity<CabDTODefaultResponse>(dto, HttpStatus.OK);

}
	
	@GetMapping("/cn/{cityName}")
	public ResponseEntity<List<CabDTODefaultResponse>> getCabByCityName(@PathVariable String cityName){
		
		List<Cab> allCabsInDB = iCabService.getCabByCityName(cityName);
		List<CabDTODefaultResponse> dtoObj = new ArrayList<>();
		
		for(Cab cab: allCabsInDB) {
			dtoObj.add(dtoConvertor.convertTo(cab));
		}
		
		return new ResponseEntity<List<CabDTODefaultResponse>>(dtoObj, HttpStatus.OK);
		
	}

}
