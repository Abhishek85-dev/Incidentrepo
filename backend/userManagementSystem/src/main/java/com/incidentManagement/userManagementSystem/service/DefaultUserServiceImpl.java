package com.incidentManagement.userManagementSystem.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.incidentManagement.userManagementSystem.dao.UserRepository;
import com.incidentManagement.userManagementSystem.DTO.UserLoginDTO;
import com.incidentManagement.userManagementSystem.DTO.UserRegisteredDTO;
import com.incidentManagement.userManagementSystem.model.User;
import com.incidentManagement.userManagementSystem.responses.LoginMessage;


@Service
public class DefaultUserServiceImpl implements DefaultUserService{
   
	@Autowired
	private UserRepository userRepo;
	
//   @Autowired
//  	private RoleRepository roleRepo;
  	
   
	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	
	
//	@Override
//	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//	
//		User user = userRepo.findByEmail(email);
//		if(user == null) {
//			throw new UsernameNotFoundException("Invalid username or password.");
//		}
//		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), mapRolesToAuthorities(user.getRoles()));		
//	}
//	
//	private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Set<Roles> roles){
//		return roles.stream().map(role -> new SimpleGrantedAuthority(role.getRole())).collect(Collectors.toList());
//	}

	@Override
	public String save(UserRegisteredDTO userRegisteredDTO) {
		//Roles role = roleRepo.findByRole("USER");
		
		User user = new User(
				userRegisteredDTO.getUserId(),
				userRegisteredDTO.getName(),
		userRegisteredDTO.getEmail(),
		
		passwordEncoder.encode(userRegisteredDTO.getPassword()),
		userRegisteredDTO.getProfile()
		//user.setRoles(role);
		);
		userRepo.save(user);
		System.out.println(user.getName());
		return user.getName();
	}
        
        public Boolean emailCheck(String email){
            User user=userRepo.findByEmail(email);
            if(user!=null){
                return true;
            }
            return false;
        }

	 @Override
	    public LoginMessage  loginEmployee(UserLoginDTO loginDTO) {
	        String msg = "";
	        User user1 = userRepo.findByEmail(loginDTO.getEmail());
	        if (user1 != null) {
	            String password = loginDTO.getPassword();
                    
	            String encodedPassword = user1.getPassword();
	            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
	            if (isPwdRight) {
	                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
	                if (user.isPresent()) {
	                    return new LoginMessage("Login Success", true);
	                } else {
	                    return new LoginMessage("Login Failed", false);
	                }
	            } else {
	                return new LoginMessage("password Not Match", false);
	            }
	        }else {
	            return new LoginMessage("Email not exits", false);
	        }
	    }

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}
}
