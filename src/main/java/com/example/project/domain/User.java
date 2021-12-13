package com.example.project.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "TB_USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    private String userName;

    private String address;

    private int mannerTemper;

    private int retradeRate;

    private String review;
}
