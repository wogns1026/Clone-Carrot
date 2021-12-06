package com.example.project.service;

import com.example.project.domain.Item;
import com.example.project.dto.ItemDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ItemService {

    public Item getItem(String itemTitle);
}
