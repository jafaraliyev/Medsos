package com.example.model;

import lombok.Builder;
import lombok.NonNull;

@Builder
public class Diabetes {
    private Boolean has;
    public String get(){
        if(has) return "do";
        return "don't";
    }
}
