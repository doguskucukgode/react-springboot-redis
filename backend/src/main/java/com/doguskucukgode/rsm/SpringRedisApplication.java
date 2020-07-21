package com.doguskucukgode.rsm;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

@SpringBootApplication
@EnableRedisRepositories
@Configuration
public class SpringRedisApplication {

    @Value(value = "${redis.hostname}")
    private String redisHostname;

    @Value(value = "${redis.port}")
    private int redisPort;

    public static void main(final String[] args) {
        SpringApplication.run(SpringRedisApplication.class, args);
    }

}