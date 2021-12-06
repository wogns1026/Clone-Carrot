package com.example.project.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long itemId;

    private String itemTitle;

    private String sellerId;

    private int cost;

    private String category;

    private boolean status;

    private String description;

    private int viewCnt;

    private String image;

    private String itemRegTime;

}
