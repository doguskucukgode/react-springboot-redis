package com.doguskucukgode.rss.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

    private static final long serialVersionUID = 5021372331235579938L;
    private String id;
    private String name;
    private String surname;
    private String email;
    private Integer age;
    private String gender;
}
