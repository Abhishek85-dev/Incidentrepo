package com.incidentManagement.userManagementSystem.DTO;

public class UserRegisteredDTO {

	private int id;
    private String name;
	
	

	private String email_id;
	
	private String password;
	
	private String profile;
	
	public UserRegisteredDTO(int id,String name, String email_id, String password, String profile) {
		super();
		this.id=id;
		this.name = name;
		this.email_id = email_id;
		this.password = password;
		this.profile = profile;
	}
	
	public UserRegisteredDTO() {}

	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getPassword() {
		return password;
	}

	

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}

