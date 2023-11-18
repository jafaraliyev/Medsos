package com.example.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Slf4j
@Setter
public class Password {
    @NonNull
    private String password_try;

    public Password(@NonNull String password_try) {
        this.password_try = password_try;
    }
}
