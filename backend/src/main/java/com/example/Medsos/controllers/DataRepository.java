package com.example.Medsos.controllers;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.function.Function;

public interface DataRepository extends JpaRepository<User, Integer> {
    List<User> findByEmail(String email);
}
