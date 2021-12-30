package com.example.project.repository;

import com.example.project.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    void deleteByBoardId(Long boardId);
}
