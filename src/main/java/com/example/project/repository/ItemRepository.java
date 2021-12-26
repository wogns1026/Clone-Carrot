package com.example.project.repository;

import com.example.project.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    List<Item> findByItemTitleContainsIgnoreCase(String itemTitle);

    Item findByItemId(Long itemId);

    List<Item> findBySellerId(Long sellerId);
}
