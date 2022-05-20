package com.shana.forgamers.services;
import com.shana.forgamers.models.entities.User;
import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    Optional<User> findUserByUsername(String username);
}
