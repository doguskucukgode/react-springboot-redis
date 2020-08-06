package com.doguskucukgode.rss.smoke;

import static org.assertj.core.api.Assertions.assertThat;

import com.doguskucukgode.rss.SpringRedisApplication;
import com.doguskucukgode.rss.rest.UserResource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = SpringRedisApplication.class)
public class SmokeTest {

    @Autowired
    private UserResource controller;

    @Test
    public void contextLoads() throws Exception {
        assertThat(controller).isNotNull();
    }
}
