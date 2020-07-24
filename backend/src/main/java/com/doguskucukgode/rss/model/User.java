package com.doguskucukgode.rss.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class User implements Serializable {

    private String id;
    private String name;
    private String surname;
    private Integer email;
    private Integer age;
    private String gender;
}
