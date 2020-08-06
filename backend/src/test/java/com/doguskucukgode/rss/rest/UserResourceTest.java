package com.doguskucukgode.rss.rest;

import com.doguskucukgode.rss.model.User;
import com.doguskucukgode.rss.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = UserResource.class)
public class UserResourceTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService service;

    private User createTestUser() {
        return User.builder()
                .id("1")
                .name("Jack")
                .surname("Sparrow")
                .email("test@test.com")
                .gender("Male")
                .age(30)
                .build();
    }

    @Test
    public void testShouldReturnUser() throws Exception {
        User user = createTestUser();
        Mockito.when(service.findById("1")).thenReturn(user);
        mockMvc.perform(MockMvcRequestBuilders.get("/users/1").accept(MediaType.ALL))
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andExpect(MockMvcResultMatchers.content().string("{\"id\":\"1\",\"name\":\"Jack\"," +
                        "\"surname\":\"Sparrow\",\"email\":\"test@test.com\",\"age\":30,\"gender\":\"Male\"}"))
                .andExpect(MockMvcResultMatchers.header().string("Content-Type", "application/json"));
    }
}