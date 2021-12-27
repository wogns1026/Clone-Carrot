package com.example.project.service.impl;

import com.example.project.domain.Board;
import com.example.project.repository.BoardRepository;
import com.example.project.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    private final BoardRepository boardRepository;

    @Override
    public List<Board> getBoard(){
        return boardRepository.findAll();
    }

}
