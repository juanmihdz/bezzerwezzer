package com.bezzerwizzer.auth.dto;

public record AuthResponse(
        String token,
        String playerId
) {}
