package com.shana.forgamers.services;
import com.shana.forgamers.models.DTO.ResponseDTO;
import com.shana.forgamers.models.DTO.SignInDTO;
import com.shana.forgamers.models.DTO.SignUpDTO;
import com.shana.forgamers.models.entities.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserEntryServiceImpl implements  UserEntryService{
    private final UserService userService;

    public UserEntryServiceImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public ResponseEntity<?> signIn(SignInDTO signInDTO) {
        ResponseDTO response = new ResponseDTO();
        User auth = userService.findUserByUsername(signInDTO.getUsername()).orElse(null);
        if(!signInDTO.getPassword().equals(auth.getPassword())){
            response.setValid(false);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
        response.setValid(true);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @Override
    public ResponseEntity<?> signUp(SignUpDTO signUpDTO) {
        ResponseDTO response = new ResponseDTO();
        if (Boolean.TRUE.equals(userService.existsUserByUsername(signUpDTO.getUsername()))) {
            response.setValid(false);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
        response.setValid(true);
        User user = new User();

        user.setUsername(signUpDTO.getUsername());
        user.setEmail(signUpDTO.getEmail());
        user.setPassword(signUpDTO.getPassword());

        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
