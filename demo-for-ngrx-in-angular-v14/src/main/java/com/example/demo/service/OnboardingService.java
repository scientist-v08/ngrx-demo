package com.example.demo.service;

import com.example.demo.entity.onboarding;
import com.example.demo.repository.onboardingRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OnboardingService {
    private final onboardingRepository onboardingRepo;
    public List<onboarding> getAllData() {
        return onboardingRepo.findAll();
    }
    public String addData(onboarding data) {
        this.onboardingRepo.save(data);
        return "Data added";
    }
}
