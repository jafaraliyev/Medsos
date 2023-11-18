package com.example.model;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.security.PublicKey;
import java.util.ArrayList;

@Getter
@Setter
@Slf4j
public class Chronics {
    private Boolean diabetes;
    private Boolean asthma;
    private Boolean migranes;
    private String other;

    private ArrayList<String> answ;

    public Chronics(Boolean diabetes, Boolean asthma, Boolean migranes, String other) {
        this.diabetes = diabetes;
        this.asthma = asthma;
        this.migranes = migranes;
        this.other = other;
        if(diabetes) answ.add("diabetes");
        if(asthma) answ.add("asthma");
        if(migranes) answ.add("migranes");
        if(!other.isEmpty()) answ.add(other);
    }
    public String get(){
        if(answ.isEmpty())return "no";
        return answ.toString();
    }
}
