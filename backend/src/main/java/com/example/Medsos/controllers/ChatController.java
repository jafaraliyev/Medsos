package com.example.Medsos.controllers;

import com.example.Medsos.DTO.ChatRequest;
import com.example.Medsos.DTO.ChatResponse;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import lombok.extern.slf4j.Slf4j;
@RestController
@Slf4j
public class ChatController {

     private static RestTemplate restTemplate = new RestTemplate();

    @Value("${openai.model}")
    private String model;
    @Value("${openai.api.key}")
    private String key;

    @Value("${openai.api.url}")
    private String apiUrl;

    @GetMapping("/chat")
    public String chat(@RequestParam String prompt) {
        // create a request
        ChatRequest request = new ChatRequest(model, prompt);
        // call the API
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + key);
        ChatResponse response = restTemplate.postForObject(apiUrl, new HttpEntity<>(request, headers), ChatResponse.class);

        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
            return "No response";
        }

        // return the first response
        return response.getChoices().get(0).getMessage().getContent();
    }
}
