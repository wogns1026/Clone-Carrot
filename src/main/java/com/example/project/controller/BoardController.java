package com.example.project.controller;

import com.example.project.domain.Board;
import com.example.project.domain.Image;
import com.example.project.domain.Review;
import com.example.project.repository.BoardRepository;
import com.example.project.repository.ImageRepository;
import com.example.project.service.BoardService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/v1/board")
@RequiredArgsConstructor
@CrossOrigin
public class BoardController {

    private final BoardService boardService;

    private final ImageRepository imageRepository;

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
        List<Image> imageList = boardService.getImagePath(boardId, "board");

        Map<String, Object> result = new HashMap<>();
        result.put("content", boardDtl);
        result.put("reviewList", reviewList);
        result.put("imagePath", imageList);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "게시판(동네 정보) 게시글 저장")
    @PostMapping
    public ResponseEntity<Map<String, Object>> saveBoard(@RequestBody Board board) {

        boardService.saveBoard(board);

        Map<String, Object> result = new HashMap<>();
        result.put("boardId", board.getBoardId());

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "게시판(동네 정보) 게시글 이미지 저장")
    @PostMapping(value = "/image/{boardId}")
        public ResponseEntity<?> saveBoardImage(
            @PathVariable Long boardId,
            @RequestPart(value = "image", required = false) MultipartFile[] files) throws IOException{
        for (MultipartFile file: files){
            String originalName = file.getOriginalFilename();
            String fileName = originalName.substring(originalName.lastIndexOf("\\") + 1);

            String uuid = UUID.randomUUID().toString();

            String saveImagePath = "C:\\temp" + File.separator + uuid + "_" + fileName;
            Path savePath = Paths.get(saveImagePath);

            Image image = new Image();
            image.setCategory("board");
            image.setFlagId(boardId);
            image.setImagePath(saveImagePath);
            imageRepository.save(image);

            try {
                file.transferTo(savePath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return new ResponseEntity<>(HttpStatus.OK);
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
