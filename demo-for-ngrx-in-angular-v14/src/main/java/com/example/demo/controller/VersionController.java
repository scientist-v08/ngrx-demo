package com.example.demo.controller;

import com.example.demo.Dto.SuccessMessage;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/version")
public class VersionController {
    @GetMapping
    public SuccessMessage getVersion(@RequestParam String data){
        SuccessMessage successMessage = new SuccessMessage();
        successMessage.setMessage("Version request received with "+data);
        return successMessage;
    }
}
