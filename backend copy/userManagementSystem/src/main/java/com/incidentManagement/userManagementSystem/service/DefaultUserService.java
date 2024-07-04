package com.incidentManagement.userManagementSystem.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.incidentManagement.userManagementSystem.DTO.UserLoginDTO;
import com.incidentManagement.userManagementSystem.DTO.UserRegisteredDTO;
import com.incidentManagement.userManagementSystem.model.User;
import com.incidentManagement.userManagementSystem.responses.LoginMessage;


public interface DefaultUserService extends UserDetailsService{

	String save(UserRegisteredDTO userRegisteredDTO);
	LoginMessage  loginEmployee(UserLoginDTO loginDTO);
         Boolean emailCheck(String email) ;
	
}
