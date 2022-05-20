package com.shana.forgamers.services;
import com.shana.forgamers.models.entities.User;
import org.springframework.stereotype.Service;
import com.shana.forgamers.repository.UserRepository;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> findUserByUsername(String username) {
        return userRepository.findByusername(username);
    }
}
