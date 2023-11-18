package com.example.Medsos.controllers;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.jackson.Jacksonized;

@Jacksonized
@Getter
@Builder
public class UserInfo {
    @JsonProperty("id")
    String id;
    @JsonProperty("email")
    String email;
    @JsonProperty("record")
    String record;
    @JsonProperty("password")
    String password;
}
