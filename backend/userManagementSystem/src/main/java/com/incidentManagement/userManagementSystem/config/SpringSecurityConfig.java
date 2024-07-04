package com.incidentManagement.userManagementSystem.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.incidentManagement.userManagementSystem.service.DefaultUserService;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {
	
	@Autowired
	private  DefaultUserService userDetailsService;
	
	@Autowired
	AuthenticationSuccessHandler successHandler;

	@Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	@Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
        auth.setUserDetailsService(userDetailsService);
        auth.setPasswordEncoder(passwordEncoder());
        return auth;
    }
//	
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
//	
	
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(requests -> {
                    requests.requestMatchers("api/v1/userregistration/**", "/api/v1/login/**").permitAll();
                    requests.anyRequest().authenticated();})
                .formLogin(login -> login.loginPage("/api/v1/login").successHandler(successHandler)).csrf(csrf -> csrf.disable())
                .logout(logout -> logout.logoutUrl("/logout")
                        .logoutSuccessUrl("/api/v1/login"))
                .oauth2Login(login -> login.loginPage("/api/v1/login").successHandler(successHandler));
//
//        http.csrf(AbstractHttpConfigurer::disable);
//        // oauth configurations
//
//        http.oauth2Login(oauth -> {
//            oauth.loginPage("/login");
//            oauth.successHandler(successHandler);
//        });
//
//        http.logout(logoutForm -> {
//            logoutForm.logoutUrl("/do-logout");
//            logoutForm.logoutSuccessUrl("/login?logout=true");
//        });

        
        return http.build();

    }
	
	
	
	

	    @Bean
	    public WebMvcConfigurer webMvcConfigurer(){
	        return new WebMvcConfigurer() {
	            @Override
	            public void addCorsMappings(CorsRegistry registry) {
	                registry.addMapping("/**")
	                .allowedOrigins("http://localhost:3000")
	                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
	                .allowedHeaders("*")
	                .allowCredentials(true);
	            }
	        };
	    }

}
