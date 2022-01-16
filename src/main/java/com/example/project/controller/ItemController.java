package com.example.project.controller;

import com.example.project.domain.Item;
import com.example.project.dto.ItemDto;
import com.example.project.service.ItemService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1")
@RequiredArgsConstructor
@CrossOrigin
public class ItemController {

    private final ItemService itemService;

    @ApiOperation(value = "매물 조회")
    @GetMapping(value = "/search/{itemTitle}")
    public ResponseEntity<Page<Item>> getItem(@PathVariable String itemTitle, Pageable pageable){
        return new ResponseEntity<>(itemService.getItem(itemTitle, pageable), HttpStatus.OK);
    }

    @ApiOperation(value = "인기 매물 조회")
    @GetMapping(value = "/hot-articles")
    public ResponseEntity<Page<Item>> getHotItem(@PageableDefault(sort = "viewCnt", direction = Sort.Direction.DESC) Pageable pageable){
        return new ResponseEntity<>(itemService.getHotItem(pageable), HttpStatus.OK);
    }

    @ApiOperation(value = "매물 상세 조회")
    @GetMapping(value = "/articles/{itemId}")
    public ResponseEntity<Map<String, Object>> getItemDetail(@PathVariable Long itemId){
        Map<String, Object> result = new HashMap<>();
        result.put("data", new ItemDto(itemService.getItemDetail(itemId)));
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "매물 저장")
    @PostMapping(value = "/item")
    public ResponseEntity<Map<String, Object>> saveItem(@RequestBody Item item){
        itemService.saveItem(item);

        Map<String, Object> result = new HashMap<>();
        result.put("itemId", item.getItemId());

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
