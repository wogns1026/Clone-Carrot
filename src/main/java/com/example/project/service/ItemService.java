package com.example.project.service;

import com.example.project.domain.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ItemService {

    /** 매물 검색 조회 */
    Page<Item> getItem(String itemTitle, Pageable pageable);

    /** 인기 매물 조회 */
    Page<Item> getHotItem(Pageable pageable);

    /** 매물 상세 조회 */
    Item getItemDetail(Long itemId);

    /** 매물 저장 */
    void saveItem(Item item);

    /** 매물 삭제 */
    void deleteItem(Long itemId);

}
