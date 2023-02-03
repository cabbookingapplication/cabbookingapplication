package com.cg.mts.entities;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

    
    public class Cab {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cabId;
	private String carType;
	private float perKmRate;
}

