package com.example.project.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Table(name = "TB_BOARD")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    private Long userId;

    private String content;

    private int viewCnt;

    private LocalDateTime regTime;

    public void setViewCnt(int viewCnt){
        this.viewCnt = viewCnt;
    }

}
