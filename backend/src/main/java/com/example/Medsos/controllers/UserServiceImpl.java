package com.example.Medsos.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    DataRepository dataRepository;
    @Override
    public User create(User user) {
        return dataRepository.save(user);
    }

    @Override
    public User getUser(String username, String password) {
        User user = dataRepository.findByEmail(username).get(0);
        if (user.getPassword().equals(password)) return user;
        return null;
    }

    @Override
    public String updateRecord(String username, String password, String newRecord) {
        User user1 = getUser(username, password);
        user1.setRecord(newRecord);
        return newRecord;
    }

}
