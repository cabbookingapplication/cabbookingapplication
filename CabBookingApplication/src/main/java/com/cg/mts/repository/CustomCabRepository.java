package com.cg.mts.repository;

import com.cg.mts.entities.Cab;

public interface CustomCabRepository {

	public Cab insertCab(Cab cab);

	public Cab updateCab(Cab cab, int perKmRate);

	public Cab deleteCab(Cab cab, int id);

}
