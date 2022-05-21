package com.shana.forgamers.models.DTO;

public class SignUpDTO {
    private String username;
    private String email;
    private String password;

    //Constructor
    public SignUpDTO(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    //Getters
    public String getUsername() {
        return username;
    }
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }

    //Setters
    public void setUsername(String username) {
        this.username = username;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
