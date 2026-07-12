package com.bezzerwizzer.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.ThreadFactory;

@Configuration
public class GameTimerConfig {

    @Bean(destroyMethod = "shutdown")
    public ScheduledExecutorService gameTimerScheduler() {
        ThreadFactory threadFactory = runnable -> {
            Thread thread = new Thread(runnable, "bezzerwizzer-game-timer");
            thread.setDaemon(true);
            return thread;
        };
        ScheduledThreadPoolExecutor scheduler = new ScheduledThreadPoolExecutor(2, threadFactory);
        scheduler.setRemoveOnCancelPolicy(true);
        return scheduler;
    }
}
