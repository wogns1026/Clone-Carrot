package com.example.project.service.impl;

import com.example.project.domain.Item;
import com.example.project.repository.ItemRepository;
import com.example.project.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    @Override
    public Page<Item> getItem(String itemTitle, Pageable pageable) {
        return itemRepository.findByItemTitleContainsIgnoreCase(itemTitle, pageable);
    }

    @Override
    public Page<Item> getHotItem(Pageable pageable){
        return itemRepository.findAll(pageable);
    }

    @Override
    public Item getItemDetail(Long itemId){
        return itemRepository.findByItemId(itemId);
    }

    @Override
    public void saveItem(Item item){
        itemRepository.save(item);
    }

    @Override
    public void deleteItem(Long itemId){
        itemRepository.deleteById(itemId);
    }

}
