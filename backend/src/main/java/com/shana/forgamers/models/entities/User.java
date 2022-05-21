package com.shana.forgamers.models.entities;
import javax.persistence.*;
import java.io.Serializable;

@Entity //Representacion de las tablas
@Table(name = "users")
public class User implements Serializable {
    //Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "iduser")
    private Integer idUser;

    @Column(name = "username", length = 100)
    private String username;
    @Column(name = "email", length = 100)
    private String email;
    @Column(name = "password", length = 100)
    private String password;

    //Getters
    public Integer getId_user() {
        return idUser;
    }
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
    public void setId_user(Integer id_user) {
        this.idUser = id_user;
    }
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
