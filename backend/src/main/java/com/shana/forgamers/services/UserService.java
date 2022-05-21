package com.shana.forgamers.services;
import com.shana.forgamers.models.DTO.SignUpDTO;
import com.shana.forgamers.models.entities.User;
import java.util.List;
import java.util.Optional;

public interface UserService {
    void saveUser(User user);

    public List<User> listUsers();

    boolean existsUserByUsername(String username);

    Optional<User> findUserByUsername(String username);
}
