package com.example.project.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Table(name = "TB_REVIEWS")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    private Long boardId;

    private String content;

    private Long userId;

    private LocalDateTime regTime;

    private Long parentReviewId;
}
