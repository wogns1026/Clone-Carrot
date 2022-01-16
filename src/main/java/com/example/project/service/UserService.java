package com.example.project.service;

import com.example.project.domain.BuyReview;
import com.example.project.domain.Item;
import com.example.project.domain.User;

import java.util.List;

public interface UserService {
    User getUserInfo(Long sellerId);

    User getUserInfo(String phoneNumber);

    List<BuyReview> getBuyReviews(Long sellerId);

    List<Item> getItemList(Long sellerId);

    void saveUserInfo(User user);

    void deleteUserInfo(Long userId);

}
