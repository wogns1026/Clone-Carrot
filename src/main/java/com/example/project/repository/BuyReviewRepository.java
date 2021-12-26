package com.example.project.repository;

import com.example.project.domain.BuyReview;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BuyReviewRepository extends JpaRepository<BuyReview, Long> {
    List<BuyReview> findBySellerId(Long sellerId);
}
