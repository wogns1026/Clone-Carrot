package com.example.project.controller;

import com.example.project.domain.Item;
import com.example.project.dto.ItemDto;
import com.example.project.service.ItemService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1")
@RequiredArgsConstructor
@CrossOrigin
public class ItemController {

    private final ItemService itemService;

    @ApiOperation(value = "매물 조회")
    @GetMapping(value = "/search/{itemTitle}")
    public ResponseEntity<Map<String, Object>> getItem(@PathVariable String itemTitle){
        List<Item> itemList = itemService.getItem(itemTitle);

        Map<String, Object> result = new HashMap<>();
        result.put("data", itemList);
        result.put("count", itemList.size());

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "인기 매물 조회")
    @GetMapping(value = "/hot-articles")
    public ResponseEntity<Map<String, Object>> getHotItem(){
        List<Item> itemList = itemService.getHotItem();

        Map<String, Object> result = new HashMap<>();
        result.put("data", itemList);
        result.put("count", itemList.size());

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "매물 상세 조회")
    @GetMapping(value = "/articles/{itemId}")
    public ResponseEntity<Map<String, Object>> getItemDetail(@PathVariable Long itemId){
        Map<String, Object> result = new HashMap<>();
        result.put("data", new ItemDto(itemService.getItemDetail(itemId)));
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
