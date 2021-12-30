package com.example.project.controller;

import com.example.project.domain.Board;
import com.example.project.service.BoardService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1")
@RequiredArgsConstructor
@CrossOrigin
public class BoardController {

    private final BoardService boardService;

    @ApiOperation(value = "게시판(동네 정보) 게시글 조회")
    @GetMapping(value = "/board")
    public ResponseEntity<Page<Board>> getBoard(Pageable pageable){
        return new ResponseEntity<>(boardService.getBoard(pageable), HttpStatus.OK);
    }

    @ApiOperation(value = "게시판(동네 정보) 게시글 삭제")
    @DeleteMapping(value = "/board")
    public ResponseEntity<Map<String, Object>> deleteBoard(@RequestParam Long boardId){
        boardService.deleteBoard(boardId);
        Map<String, Object> result = new HashMap<>();
        result.put("deleteCount", 1);
        return new ResponseEntity<> (result, HttpStatus.OK);
    }


}
