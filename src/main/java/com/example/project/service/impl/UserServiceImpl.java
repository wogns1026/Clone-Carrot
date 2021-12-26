package com.example.project.service.impl;

import com.example.project.domain.BuyReview;
import com.example.project.domain.Item;
import com.example.project.domain.User;
import com.example.project.repository.BuyReviewRepository;
import com.example.project.repository.ItemRepository;
import com.example.project.repository.UserRepository;
import com.example.project.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final BuyReviewRepository buyReviewRepository;
    private final ItemRepository itemRepository;

    @Override
    public User getUserInfo(Long sellerId){
        return userRepository.findByUserId(sellerId);
    }

    @Override
    public List<BuyReview> getBuyReviews(Long sellerId){
        return buyReviewRepository.findBySellerId(sellerId);
    }

    @Override
    public List<Item> getItemList(Long sellerId){
        return itemRepository.findBySellerId(sellerId);
    }



}
