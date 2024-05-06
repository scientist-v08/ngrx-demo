package com.example.demo.controller;

import com.example.demo.Dto.SuccessMessage;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/preview")
public class PreviewController {
    @GetMapping
    public SuccessMessage getPreview(@RequestParam String something){
        SuccessMessage successMessage = new SuccessMessage();
        successMessage.setMessage("Preview request received with "+something);
        return successMessage;
    }
}
