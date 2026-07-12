package com.bezzerwizzer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RoomCleanupScheduler {

    private final RoomService roomService;

    @Scheduled(fixedDelay = 60_000)
    public void cleanup() {
        roomService.cleanupExpiredRooms(System.currentTimeMillis());
    }
}
