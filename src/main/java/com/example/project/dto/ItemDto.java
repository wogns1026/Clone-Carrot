package com.example.project.dto;

import com.example.project.domain.Item;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

import static org.springframework.beans.BeanUtils.copyProperties;

@Getter
@Setter
@AllArgsConstructor
public class ItemDto {

    private long itemId;

    private String itemTitle;

    private String sellerId;

    private int cost;

    private String category;

    private boolean status;

    private String description;

    private int viewCnt;

    private String image;

    private LocalDateTime itemRegTime;

    public ItemDto(Item item){
        copyProperties(item, this);
    }
}
