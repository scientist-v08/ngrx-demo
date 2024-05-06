package com.example.demo.controller;

import com.example.demo.Dto.OnboardingDto;
import com.example.demo.Dto.SuccessMessage;
import com.example.demo.entity.onboarding;
import com.example.demo.service.OnboardingService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/onboarding")
@AllArgsConstructor
public class onboardingController {
    private final OnboardingService onboardingService;
    @GetMapping()
    public OnboardingDto toGetAllData() {
        OnboardingDto onboardingDto = new OnboardingDto();
        onboardingDto.setAllDetails(this.onboardingService.getAllData());
        return onboardingDto;
    }
    @PostMapping()
    public SuccessMessage toSavedata(@RequestBody onboarding data) {
        SuccessMessage successMessage = new SuccessMessage();
        successMessage.setMessage(this.onboardingService.addData(data));
        return  successMessage;
    }
}
