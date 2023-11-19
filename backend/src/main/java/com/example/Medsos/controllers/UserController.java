package com.example.Medsos.controllers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@Slf4j
@RestController
public class UserController {
    @Autowired
    UserService userService;
    private User user;

    @PostMapping("create")
    public void create(@RequestBody User user)
    {log.debug("Creating user");
        userService.create(user);
    }
    @GetMapping("getuser")
    public User getUser(@RequestParam String username, @RequestParam String password){
        User user1 = userService.getUser(username, password);
        if(user1==null)log.debug("credentialls error");
        log.debug("Sign in success");
        return user1;
    }
    @PostMapping("updateRecord")
    public String updateRecord(@RequestParam String username, @RequestParam String password, @RequestBody String newRecord){
        return userService.updateRecord(username, password, newRecord);
    }
}
