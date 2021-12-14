package com.example.project.service;

import com.example.project.domain.Item;

import java.util.List;

public interface ItemService {

    /* 매물 검색 조회 */
    List<Item> getItem(String itemTitle);

    /* 인기 매물 조회 */
    List<Item> getHotItem();

    /* 매물 상세 조회 */
    Item getItemDetail(Long itemId);

}
