package com.example.project.repository;

import com.example.project.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    Item findByItemTitleContainsIgnoreCase(String itemTitle);
}
