package com.example.Medsos.controllers;

import jakarta.persistence.*;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

@Slf4j
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
public class User {
    private @Id
    @GeneratedValue(strategy = GenerationType.AUTO) Long id;

    private  String username;
    private String email;
    private String password;
    private String record;

    public void setId(Long id) {
        this.id = id;
    }


    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", record='" + record + '\'' +
                '}';
    }
}
