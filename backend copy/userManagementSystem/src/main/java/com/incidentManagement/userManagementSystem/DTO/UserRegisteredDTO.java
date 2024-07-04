package com.incidentManagement.userManagementSystem.DTO;

import com.incidentManagement.userManagementSystem.model.Providers;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisteredDTO {

	
    private String userId;

    private String name;
    private String email;
    private String password;
    private String about;
    private String profilePic;
    private String phoneNumber;


    private boolean enabled = true;
    private boolean emailVerified = false;
    private boolean phoneVerified = false;

    // SELF, GOOGLE,
    private Providers provider = Providers.SELF;
    private String providerUserId;
	
}

