package com.cg.mts.repository;

import com.cg.mts.entities.Cab;

public class CustomCabRepositoryImpl implements CustomCabRepository {

	@Override
	public Cab insertCab(Cab cab) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Cab updateCab(Cab cab, int perKmRate) {
		{
			if (cab != null)
				;
		}
		cab.setPerKmRate(perKmRate);
		CustomCabRepositoryImpl.save(cab);
		return cab;
	}

	private static void save(Cab cab) {
		// TODO Auto-generated method stub

	}

	@Override
	public Cab deleteCab(Cab cab, int id) {

		// TODO Auto-generated method stub
		return null;
	}

	public static Cab referenceById(int cabId) {
		// TODO Auto-generated method stub
		return null;
	}

}
