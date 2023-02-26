package com.cg.mts.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InvalidCabException extends Exception{
	
	String msg;
	
	@Override
	public String toString(){
		return "InvalidCabException [msg="+ msg +"]";
		
	}
	

}
