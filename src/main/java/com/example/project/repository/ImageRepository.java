package com.example.project.repository;

import com.example.project.domain.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findByFlagIdAndCategory(Long boardId, String category);

    void deleteByFlagIdAndCategory(Long boardId, String category);
}
