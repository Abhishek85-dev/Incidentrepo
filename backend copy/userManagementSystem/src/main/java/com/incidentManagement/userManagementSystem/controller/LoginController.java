package com.incidentManagement.userManagementSystem.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incidentManagement.userManagementSystem.dao.UserRepository;
import com.incidentManagement.userManagementSystem.DTO.UserLoginDTO;
import com.incidentManagement.userManagementSystem.model.User;
import com.incidentManagement.userManagementSystem.service.DefaultUserService;
import com.incidentManagement.userManagementSystem.responses.LoginMessage;

@RestController
@RequestMapping("api/v1/login")
public class LoginController {
	@Autowired
	private DefaultUserService userService;
	
	@Autowired
	UserRepository userRepo;
	
	
	

	 

//    @ModelAttribute("user")
//    public UserLoginDTO userLoginDTO() {
//        return new UserLoginDTO();
//    }
//    
//	@GetMapping
//	public String login() {
//		return "opop";
//	}
//	
//	@PostMapping
//	public void loginUser(@ModelAttribute("user") 
//	UserLoginDTO userLoginDTO) {
//		System.out.println("UserDTO"+userLoginDTO);
//		 userService.loadUserByUsername(userLoginDTO.getUsername());
//	}
	
	 @PostMapping(path = "/logging")
	    public ResponseEntity<?> loginEmployee(@RequestBody UserLoginDTO loginDTO)
	    {
                if (loginDTO.getEmail() == null || loginDTO.getEmail().isEmpty()) {
        return ResponseEntity.badRequest().body("Email is required and cannot be null or empty.");
    }
    if (loginDTO.getPassword() == null || loginDTO.getPassword().isEmpty()) {
        return ResponseEntity.badRequest().body("Password is required and cannot be null or empty.");
    }
	        LoginMessage loginResponse = userService.loginEmployee(loginDTO);
	        return ResponseEntity.ok(loginResponse);
	    }
	
}