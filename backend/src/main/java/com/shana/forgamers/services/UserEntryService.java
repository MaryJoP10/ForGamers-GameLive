package com.shana.forgamers.services;
import com.shana.forgamers.models.DTO.SignInDTO;
import com.shana.forgamers.models.DTO.SignUpDTO;
import org.springframework.http.ResponseEntity;

public interface UserEntryService {
    ResponseEntity<?> signIn(SignInDTO signInDTO);

    ResponseEntity<?> signUp(SignUpDTO signUpDTO);
}
