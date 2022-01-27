package com.example.project.service;

import com.example.project.domain.Board;
import com.example.project.domain.Image;
import com.example.project.domain.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BoardService {

    Page<Board> getBoard(Pageable pageable);

    Board getBoardDtl(Long boardId);

    List<Review> getBoardReviews(Long boardId);

    void saveBoard(Board board);

    void deleteBoard(Long boardId);

    List<Image> getImagePath(Long boardId, String category);

}
