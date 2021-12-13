package com.example.project.service.impl;

import com.example.project.domain.Item;
import com.example.project.repository.ItemRepository;
import com.example.project.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    @Override
    public Item getItem(String itemTitle) {
        return itemRepository.findByItemTitleContainsIgnoreCase(itemTitle);
    }

    @Override
    public List<Item> getHotItem(){
        return itemRepository.findAll(Sort.by(Sort.Direction.DESC, "viewCnt"));
    }

}
