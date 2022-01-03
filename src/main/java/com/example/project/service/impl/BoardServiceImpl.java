package com.example.project.service.impl;

import com.example.project.domain.Board;
import com.example.project.domain.Review;
import com.example.project.repository.BoardRepository;
import com.example.project.repository.ReviewRepository;
import com.example.project.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    private final BoardRepository boardRepository;
    private final ReviewRepository reviewRepository;

    @Override
    public Page<Board> getBoard(Pageable pageable){
        return boardRepository.findAll(pageable);
    }

    @Override
    public Board getBoardDtl(Long boardId){
        return boardRepository.findByBoardId(boardId);
    }

    @Override
    public List<Review> getBoardReviews(Long boardId){
        // 정렬이 굳이 필요 없을 수도 있음 (추후 확인 후 삭제)
        Sort sort = Sort.by(Sort.Direction.ASC, "boardId", "reviewId");
        return reviewRepository.findByBoardId(boardId, sort);
    }

    @Override
    @Transactional
    public void saveBoard(Board board) {
        boardRepository.save(board);
    }

    @Override
    @Transactional
    public void deleteBoard(Long boardId) {
        boardRepository.deleteById(boardId);
        reviewRepository.deleteByBoardId(boardId);
    }

}
