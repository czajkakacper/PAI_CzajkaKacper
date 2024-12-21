package com.czajkak.ServiceBookingSystem.dto;

import com.czajkak.ServiceBookingSystem.enums.UserRole;
import jakarta.validation.constraints.*;
import lombok.Data;

//@Data
//public class SignupRequestDTO {
//
//    private Long id;
//
//    private String email;
//
//    private String password;
//
//    private String name;
//
//    private String lastname;
//
//    private String phone;
//
//}

@Data
public class SignupRequestDTO {

    private Long id;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String password;

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;

    @NotBlank(message = "Last name is required")
    @Size(min = 2, max = 50, message = "Last name must be between 2 and 50 characters")
    private String lastname;

    @Pattern(regexp = "\\d{9,15}", message = "Phone number must be between 9 and 15 digits")
    private String phone;
    
}