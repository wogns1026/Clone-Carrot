package com.example.project.repository;

import com.example.project.domain.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    Page<Item> findByItemTitleContainsIgnoreCase(String itemTitle, Pageable pageable);

    Item findByItemId(Long itemId);

    List<Item> findBySellerId(Long sellerId);
}
