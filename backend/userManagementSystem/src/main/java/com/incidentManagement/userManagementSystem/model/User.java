package com.incidentManagement.userManagementSystem.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;




@Entity
@Table(name = "user_data")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String email;
	
	private String password;
	
	private String profile;
	
	//private Integer phoneNum;
	

//	@ManyToMany(fetch = FetchType.EAGER)
//	@JoinTable(name = "users_role", joinColumns = @JoinColumn(name = "cust_id", referencedColumnName = "id"),
//	inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id") )
//	Set<Roles> roles = new HashSet<Roles>();
//	
	
	public User(int id, String name, String email, String password, String profile) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.profile = profile;
	}
	
	public User() {}
	
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

//	public Set<Roles> getRoles() {
//		return roles;
//	}
//
//	public void setRoles(Roles roles) {
//		this.roles.add(roles);
//	}
	
//
//	public Integer getPhoneNum() {
//		return phoneNum;
//	}
//
//	public void setPhoneNum(Integer phoneNum) {
//		this.phoneNum = phoneNum;
//	}


}
