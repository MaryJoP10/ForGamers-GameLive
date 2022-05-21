package com.shana.forgamers.controllers;
import com.shana.forgamers.models.DTO.SignInDTO;
import com.shana.forgamers.models.DTO.SignUpDTO;
import com.shana.forgamers.services.UserEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/users")
public class UserEntryController {
    @Autowired
    private UserEntryService userService;

    public UserEntryController(UserEntryService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody SignUpDTO signUpDTO){
        return userService.signUp(signUpDTO);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody SignInDTO signInDTO){
        return userService.signIn(signInDTO);
    }
}
