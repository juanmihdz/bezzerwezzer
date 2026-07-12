package com.bezzerwizzer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class BezzerwizzerApplication {

    public static void main(String[] args) {
        SpringApplication.run(BezzerwizzerApplication.class, args);
    }
}
