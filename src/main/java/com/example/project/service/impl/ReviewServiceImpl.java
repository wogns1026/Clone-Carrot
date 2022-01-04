package com.example.project.service.impl;

import com.example.project.domain.Review;
import com.example.project.repository.ReviewRepository;
import com.example.project.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;

    @Override
    @Transactional
    public void saveReview(Review review){
        reviewRepository.save(review);
    }

    @Override
    @Transactional
    public void deleteReview(Long reviewId){
        reviewRepository.deleteByReviewId(reviewId);
        reviewRepository.deleteByParentReviewId(reviewId);
    }
}
