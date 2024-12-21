package com.czajkak.ServiceBookingSystem.services.authentication;

import com.czajkak.ServiceBookingSystem.dto.SignupRequestDTO;
import com.czajkak.ServiceBookingSystem.dto.UserDto;

public interface AuthService {

    UserDto signupClient(SignupRequestDTO signupRequestDTO);

    Boolean presentByEmail(String email);

    UserDto signupCompany(SignupRequestDTO signupRequestDTO);
}
