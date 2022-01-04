package com.example.project.controller;

import com.example.project.domain.Review;
import com.example.project.service.ReviewService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/review")
@RequiredArgsConstructor
@CrossOrigin
public class ReviewController {

    private final ReviewService reviewService;

    @ApiOperation(value = "리뷰 저장")
    @PostMapping
    public ResponseEntity<Map<String, Object>> saveReview(@RequestBody Review review){
        reviewService.saveReview(review);

        Map<String, Object> res = new HashMap<>();
        res.put("status", "success");

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "리뷰 삭제")
    @DeleteMapping
    public ResponseEntity<Map<String, Object>> deleteReview(@RequestParam Long reviewId){
        reviewService.deleteReview(reviewId);

        Map<String, Object> res = new HashMap<>();
        res.put("status", "success");

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
