package com.incidentManagement.userManagementSystem.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incidentManagement.userManagementSystem.DTO.UserRegisteredDTO;
import com.incidentManagement.userManagementSystem.service.DefaultUserService;
import com.incidentManagement.userManagementSystem.service.DefaultUserServiceImpl;
import com.nimbusds.oauth2.sdk.Response;

@RestController
@CrossOrigin
@RequestMapping("api/v1/userregistration")
public class RegistrationController {

    @Autowired
    private DefaultUserServiceImpl userService;
//
//	    public RegistrationController(DefaultUserServiceImpl userService) {
//	        super();
//	        this.userService = userService;
//	    }
//
//	    @ModelAttribute("user")
//	    public UserRegisteredDTO userRegistrationDto() {
//	        return new UserRegisteredDTO();
//	    }
//
//	    @GetMapping
//	    public String showRegistrationForm() {
//	        return "register";
//	    }

//	    @PostMapping
//	    public String registerUserAccount(@ModelAttribute("user") 
//	              UserRegisteredDTO registrationDto) {
//	        userService.save(registrationDto);
//	        return "redirect:/login";
//	    }
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Rest Api Project";
    }

    @PostMapping(path = "/save")
    public ResponseEntity<Object> saveEmployee(@RequestBody UserRegisteredDTO userRegisterDTO) {
      
//        if (userRegisterDTO.getUserId() == 0) {
//            return ResponseEntity.badRequest().body("ID is required and cannot be zero.");
//        }
        if (userRegisterDTO.getName() == null || userRegisterDTO.getName().isEmpty()) {
            return ResponseEntity.badRequest().body("Name is required and cannot be null or empty.");
        }
        if (userRegisterDTO.getEmail() == null || userRegisterDTO.getEmail().isEmpty()) {
            return ResponseEntity.badRequest().body("Email ID is required and cannot be null or empty.");
        }
        if (userRegisterDTO.getPassword() == null || userRegisterDTO.getPassword().isEmpty()) {
            return ResponseEntity.badRequest().body("Password is required and cannot be null or empty.");
        }
        if (userRegisterDTO.getProfile() == null || userRegisterDTO.getProfile().isEmpty()) {
            return ResponseEntity.badRequest().body("Profile is required and cannot be null or empty.");
        }
        String id = userService.save(userRegisterDTO);
        if (id != null) {
            return generateOutput("Your Profile is saved now!", HttpStatus.OK, id);
        } else {
            return generateOutput("Your Profile is not saved!", HttpStatus.BAD_REQUEST, userRegisterDTO);
        }
    }

    private ResponseEntity<Object> generateOutput(String msg, HttpStatus st, Object objData) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("Message", msg);
        map.put("Status", st);
        map.put("data", objData);

        return new ResponseEntity<Object>(map, st);
    }
}
