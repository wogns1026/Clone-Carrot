package com.example.project.service.impl;

import com.example.project.domain.Board;
import com.example.project.repository.BoardRepository;
import com.example.project.repository.ReviewRepository;
import com.example.project.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Transactional
    public void deleteBoard(Long boardId) {
        boardRepository.deleteById(boardId);
        reviewRepository.deleteByBoardId(boardId);
    }

}
