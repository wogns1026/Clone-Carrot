package com.example.project.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Table(name = "TB_BUY_REVIEWS")
public class BuyReview {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long reviewId;

    private Long userId;

    private Long sellerId;

    private String content;

    private LocalDateTime regTime;
}
