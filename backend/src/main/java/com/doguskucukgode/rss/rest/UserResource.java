package com.doguskucukgode.rss.rest;

import java.util.List;

import javax.ws.rs.core.MediaType;

import com.doguskucukgode.rss.model.User;
import com.doguskucukgode.rss.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
public class UserResource {

    @Autowired
    private UserService userService;

    @CrossOrigin
    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON)
    public ResponseEntity<List<User>> getUsers() {
        final List<User> users = userService.findByPattern("*");
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON)
    public ResponseEntity<User> getUsers(@PathVariable("id") final String userId) {
        final User user = userService.findById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(value = "/", consumes = MediaType.APPLICATION_JSON)
    public ResponseEntity<Void> createUser(@RequestBody final User user) {
        userService.save(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @CrossOrigin
    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON)
    public ResponseEntity<Void> updateUser(@PathVariable("id") final String userId, @RequestBody final User user) {
        user.setId(userId);
        userService.update(user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") final String userId) {
        userService.delete(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
