package com.example.project.controller;

import com.example.project.domain.Board;
import com.example.project.domain.Review;
import com.example.project.service.BoardService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/board")
@RequiredArgsConstructor
@CrossOrigin
public class BoardController {

    private final BoardService boardService;

    @ApiOperation(value = "게시판(동네 정보) 게시글 전체 조회")
    @GetMapping
    public ResponseEntity<Page<Board>> getBoard(Pageable pageable){
        return new ResponseEntity<>(boardService.getBoard(pageable), HttpStatus.OK);
    }

    @ApiOperation(value = "게시판(동네 정보) 게시글 상세 조회")
    @GetMapping(value = "/dtl/{boardId}")
    public ResponseEntity<Map<String, Object>> getBoardDtl(@PathVariable Long boardId){
        Board boardDtl = boardService.getBoardDtl(boardId);
        List<Review> reviewList = boardService.getBoardReviews(boardId);

        Map<String, Object> result = new HashMap<>();
        result.put("content", boardDtl);
        result.put("reviewList", reviewList);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "게시판(동네 정보) 게시글 저장")
    @PostMapping
    public ResponseEntity<Map<String, Object>> saveBoard(@RequestBody Board board){
        boardService.saveBoard(board);

        Map<String, Object> result = new HashMap<>();
        result.put("success", "success");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "게시판(동네 정보) 게시글 삭제")
    @DeleteMapping
    public ResponseEntity<Map<String, Object>> deleteBoard(@RequestParam Long boardId){
        boardService.deleteBoard(boardId);
        Map<String, Object> result = new HashMap<>();
        result.put("deleteCount", 1);
        return new ResponseEntity<> (result, HttpStatus.OK);
    }


}
