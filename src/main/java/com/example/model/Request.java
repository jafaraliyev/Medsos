package com.example.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Builder
@Setter
@Slf4j
public class Request {
    private String promp;
    @NonNull
    private String body;

}
