package com.bezzerwizzer.auth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record GuestLoginRequest(
        @NotBlank(message = "Username is required")
        @Size(min = 2, max = 30, message = "Username must be between 2 and 30 characters")
        String username
) {}
