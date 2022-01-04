package com.example.project.repository;

import com.example.project.domain.Review;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByBoardId(Long boardId, Sort sort);

    void deleteByBoardId(Long boardId);

    void deleteByReviewId(Long reviewId);
    void deleteByParentReviewId(Long reviewId);
}
