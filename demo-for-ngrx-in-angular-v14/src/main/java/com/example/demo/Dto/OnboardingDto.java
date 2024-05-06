package com.example.demo.Dto;

import com.example.demo.entity.onboarding;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class OnboardingDto {
    private List<onboarding> allDetails;
}
