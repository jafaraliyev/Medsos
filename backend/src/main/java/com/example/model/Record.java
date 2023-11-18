package com.example.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Builder
@Setter
@Slf4j
public class Record {
    private Integer height;
    private Sex sex;
    private String notes;
    private Integer contact;
    private Integer weight;
    private Integer age;
    private Chronics chronics;
    private Meds currMeds;

    public String generate() {
        return "I am a" + sex.toString() +
                ", I am " + age.toString() + "years old and weight " + weight.toString()
                 + "My contacts are " + contact.toString()
                + ". I have " + chronics.get() + ". I take " + currMeds.get()+ "medications";
    }
}
