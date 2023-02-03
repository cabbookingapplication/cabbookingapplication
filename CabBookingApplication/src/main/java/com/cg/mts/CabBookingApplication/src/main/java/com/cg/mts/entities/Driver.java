package com.cg.mts.entities;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import org.apache.catalina.users.AbstractUser;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Driver {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int driverId;
	private String licenceNo;
	private float rating;
	private String nativeLanguage;
	private int experience;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CabId", referencedColumnName = "CabId")
	private Cab cab;

	public Driver(String licenceNo, float rating, String nativeLanguage, int experience) {
		super();
		this.licenceNo = licenceNo;
		this.rating = rating;
		this.nativeLanguage = nativeLanguage;
		this.experience = experience;
	}

	
}


	
