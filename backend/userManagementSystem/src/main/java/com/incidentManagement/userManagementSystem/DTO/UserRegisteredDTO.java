package com.incidentManagement.userManagementSystem.DTO;

import com.incidentManagement.userManagementSystem.model.Providers;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisteredDTO {

    private int userId;

    private String name;
    private String email;
    private String password;
    private String about;
    private String profile;
    private String profilePic;
    private int phoneNumber;

    private boolean enabled = true;
    private boolean emailVerified = false;
    private boolean phoneVerified = false;

    // SELF, GOOGLE,
    private Providers provider = Providers.SELF;
    private String providerUserId;

}
