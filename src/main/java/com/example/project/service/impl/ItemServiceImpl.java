package com.example.project.service.impl;

import com.example.project.domain.Item;
import com.example.project.repository.ItemRepository;
import com.example.project.service.ItemService;
import com.example.project.dto.ItemDto;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    @Override
    public Item getItem(String itemTitle) {
        Item item = itemRepository.findByItemTitle(itemTitle);
        return item;
    }
}
