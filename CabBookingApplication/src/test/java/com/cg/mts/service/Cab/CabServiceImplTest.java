package com.cg.mts.service.Cab;
import com.cg.mts.repository.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import com.cg.mts.entities.Cab;
import com.cg.mts.repository.ICabRepository;
import com.cg.mts.service.CabServiceImpl;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class CabServiceImplTest {
	
	@InjectMocks   // use on which class to test
	CabServiceImpl cabServiceImpl;
	
	@Mock
	ICabRepository cabRepository;

	








	
	
	@SuppressWarnings("deprecation")
	@BeforeEach
	public void doInit()
	{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	@DisplayName("Test case to test insertion of Cab when input values are valid")
	void testInsertCab() {
		// sample input 
		Cab sampleInput = new Cab(1,"Mini",30);
		// expected output 
		Cab actualOutput = new Cab(1,"Mini",30);
		actualOutput.setCabId(0);
		actualOutput.setCarType(null);
		
		
		Cab expectedOutput = new Cab(1,"Mini",30);
		expectedOutput.setCabId(0);
		expectedOutput.setCarType(null);
		
		// call actual method and store actual result : actual output
		
		when(cabRepository.save(sampleInput)).thenReturn(actualOutput);
		
			
		// compare actual output with expected output
		assertEquals(actualOutput, expectedOutput);
		
	}

	
	
	
	
	@Test
	@DisplayName("Test case to test insertion of Cab when input values are invalid")
	void testInsertCab2() {
		Cab sampleInput = new Cab(1,null,30);
		
		// call actual method and store actual result : actual output
		
		when(cabRepository.save(sampleInput)).thenThrow(NullPointerException.class);
		
		
	}

	
	
}

