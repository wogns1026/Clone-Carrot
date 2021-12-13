package com.example.project.service;

import com.example.project.domain.Item;

import java.util.List;

public interface ItemService {

    /* 매물 검색 조회 */
    Item getItem(String itemTitle);

    /* 인기 매물 조회 */
    List<Item> getHotItem();

}
