package com.example.project.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Table(name = "TB_ITEMS")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long itemId;

    private String itemTitle;

    private long sellerId;

    private int cost;

    private String category;

    private boolean status;

    private String description;

    private int viewCnt;

    private String image;

    private LocalDateTime itemRegTime;

}
