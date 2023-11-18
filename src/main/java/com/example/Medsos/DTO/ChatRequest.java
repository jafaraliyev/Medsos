package com.example.Medsos.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ChatRequest {
    private String model;
    private List<Message> messages = new ArrayList<>();

    public ChatRequest(String model, String query) {
        this.model = model;
        this.messages.add(new Message("user", query));
    }
}