package com.shana.forgamers.services;
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
        User auth = userService.findUserByUsername(signInDTO.getUsername()).orElse(null);
        if(!signInDTO.getPassword().equals(auth.getPassword())){
            return ResponseEntity.status(HttpStatus.OK).body("Usuario o contraseña inconrrecto");
        }

        return ResponseEntity.status(HttpStatus.OK).body("Ha iniciado sesión");
    }

    @Override
    public ResponseEntity<?> signUp(SignUpDTO signUpDTO) {

        if (Boolean.TRUE.equals(userService.existsUserByUsername(signUpDTO.getUsername()))) {
            return ResponseEntity.status(HttpStatus.OK).body("El usuario no esta disponible.");
        }

        User user = new User();

        user.setUsername(signUpDTO.getUsername());
        user.setEmail(signUpDTO.getEmail());
        user.setPassword(signUpDTO.getPassword());

        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body("");
    }
}
