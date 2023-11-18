package com.example.Medsos.controllers;

import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public User create(User user);

    User getUser(String username, String password);
    String updateRecord(String username, String password, String newRecord);
}
