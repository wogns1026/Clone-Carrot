package com.example.project.service.impl;

import com.example.project.domain.Item;
import com.example.project.repository.ItemRepository;
import com.example.project.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    @Override
    public Item getItem(String itemTitle) {
        return itemRepository.findByItemTitleContainsIgnoreCase(itemTitle);
    }
}
