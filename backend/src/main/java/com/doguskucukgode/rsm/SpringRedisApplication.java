package com.doguskucukgode.rsm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

@SpringBootApplication
@EnableRedisRepositories
public class SpringRedisApplication {

    public static void main(final String[] args) {
        SpringApplication.run(SpringRedisApplication.class, args);
    }

}
