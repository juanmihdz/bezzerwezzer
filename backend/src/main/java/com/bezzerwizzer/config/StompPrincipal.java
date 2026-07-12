package com.bezzerwizzer.config;

import java.security.Principal;

public record StompPrincipal(String playerId, String username) implements Principal {

    @Override
    public String getName() {
        return playerId;
    }
}
