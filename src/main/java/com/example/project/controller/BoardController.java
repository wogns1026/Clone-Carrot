package com.example.project.controller;

import com.example.project.domain.Board;
import com.example.project.service.BoardService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1")
@RequiredArgsConstructor
@CrossOrigin
public class BoardController {

    private final BoardService boardService;

    @ApiOperation(value = "게시판(동네 정보) 게시글 조회")
    @GetMapping(value = "/board")
    public ResponseEntity<Map<String, Object>> getBoard(){
        List<Board> boardList = boardService.getBoard();

        Map<String, Object> res = new HashMap<>();
        res.put("data", boardList);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }


}
