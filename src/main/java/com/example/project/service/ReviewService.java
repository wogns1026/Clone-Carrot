package com.example.project.service;

import com.example.project.domain.Review;

public interface ReviewService {
    void saveReview(Review review);

    void deleteReview(Long review);
}
