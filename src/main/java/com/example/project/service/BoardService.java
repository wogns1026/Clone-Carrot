package com.example.project.service;

import com.example.project.domain.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BoardService {

    Page<Board> getBoard(Pageable pageable);

}
