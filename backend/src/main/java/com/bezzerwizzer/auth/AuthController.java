package com.bezzerwizzer.auth;

import com.bezzerwizzer.auth.dto.AuthResponse;
import com.bezzerwizzer.auth.dto.GuestLoginRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final JwtService jwtService;

    @PostMapping("/guest")
    public ResponseEntity<AuthResponse> guestLogin(@Valid @RequestBody GuestLoginRequest request) {
        String playerId = UUID.randomUUID().toString();
        String token = jwtService.generateToken(playerId, request.username());

        log.info("Guest login: playerId={}, username={}", playerId, request.username());

        return ResponseEntity.ok(new AuthResponse(token, playerId));
    }
}
