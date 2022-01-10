package com.example.project.controller;

import com.example.project.domain.BuyReview;
import com.example.project.domain.Item;
import com.example.project.domain.User;
import com.example.project.service.UserService;
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
public class UserController {

    private final UserService userService;

    @ApiOperation(value = "판매자 정보 상세 조회")
    @GetMapping(value = "/seller-info/{sellerId}")
    public ResponseEntity<Map<String, Object>> getSellerInfo(@PathVariable Long sellerId){
        User sellerInfo = userService.getUserInfo(sellerId);
        List<BuyReview> buyReviews = userService.getBuyReviews(sellerId);
        List<Item> itemList = userService.getItemList(sellerId);

        Map<String, Object> res = new HashMap<>();
        res.put("sellerInfo", sellerInfo);
        res.put("buyReviews", buyReviews);
        res.put("sellItem", itemList);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "유저 가입 여부 확인")
    @GetMapping(value = "/user/{phoneNumber}")
    public ResponseEntity<Map<String, Object>> getUserInfo(@PathVariable String phoneNumber){
        User userInfo = userService.getUserInfo(phoneNumber);

        Map<String, Object> res = new HashMap<>();
        res.put("userInfo", userInfo);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }


}
