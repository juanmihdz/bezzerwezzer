package com.bezzerwizzer.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * Spring 7 correlates SockJS transport requests using the full remote socket
 * address. Behind Nginx, each XHR request can use a different upstream source
 * port, so normalize the address from headers that Nginx overwrites.
 */
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class SockJsProxyAddressFilter extends OncePerRequestFilter {

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getRequestURI();
        return !path.equals("/ws") && !path.startsWith("/ws/");
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
        String forwardedFor = request.getHeader("X-Forwarded-For");
        String forwardedPort = request.getHeader("X-Forwarded-Port");

        if (forwardedFor == null || forwardedFor.isBlank()) {
            filterChain.doFilter(request, response);
            return;
        }

        String clientAddress = forwardedFor.split(",", 2)[0].trim();
        int clientPort = parsePort(forwardedPort);

        HttpServletRequestWrapper normalizedRequest = new HttpServletRequestWrapper(request) {
            @Override
            public String getRemoteAddr() {
                return clientAddress;
            }

            @Override
            public String getRemoteHost() {
                return clientAddress;
            }

            @Override
            public int getRemotePort() {
                return clientPort;
            }
        };

        filterChain.doFilter(normalizedRequest, response);
    }

    private int parsePort(String forwardedPort) {
        if (forwardedPort == null) {
            return 0;
        }
        try {
            return Integer.parseInt(forwardedPort);
        } catch (NumberFormatException ignored) {
            return 0;
        }
    }
}
