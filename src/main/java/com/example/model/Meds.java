package com.example.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class Meds {
    private String medications;
    String get(){
        if(medications.isEmpty()) return "no";
        return medications;
    }
}
