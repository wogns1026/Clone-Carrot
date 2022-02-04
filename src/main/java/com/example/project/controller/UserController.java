package com.example.project.controller;

import com.example.project.domain.BuyReview;
import com.example.project.domain.Item;
import com.example.project.domain.User;
import com.example.project.repository.UserRepository;
import com.example.project.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {

    private final UserService userService;

    private UserRepository userRepository;

    @ApiOperation(value = "판매자 정보 상세 조회")
    @GetMapping(value = "/seller-info/{sellerId}")
    public ResponseEntity<Map<String, Object>> getSellerInfo(@PathVariable Long sellerId){
        User sellerInfo = userService.getUserInfo(sellerId);
        List<BuyReview> buyReviews = userService.getBuyReviews(sellerId);
        List<Item> itemList = userService.getItemList(sellerId);

        Map<String, Object> res = new HashMap<>();
        res.put("sellerInfo", sellerInfo);
        res.put("buyReviews", buyReviews);
        res.put("sellItem", itemList);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "유저 가입 여부 확인")
    @GetMapping(value = "/user/{phoneNumber}")
    public ResponseEntity<Map<String, Object>> getUserInfo(@PathVariable String phoneNumber){
        User userInfo = userService.getUserInfo(phoneNumber);

        Map<String, Object> res = new HashMap<>();
        res.put("userInfo", userInfo);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @ApiOperation(value = "신규 유저 저장(가입)")
    @PostMapping(value = "/user")
    public ResponseEntity<?> saveUserInfo(@RequestBody User user){
        userService.saveUserInfo(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ApiOperation(value = "유저 탈퇴")
    @DeleteMapping(value = "/user")
    public ResponseEntity<?> deleteUserInfo(@RequestParam Long userId){
        userService.deleteUserInfo(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @ApiOperation(value = "로그인")
//    @PostMapping(value = "/login")
//    public User login(@RequestBody User user, HttpServletResponse response){
//        User member = userRepository.findByPhoneNumber(user.getPhoneNumber())
//                .orElseThrow(()->new IllegalArgumentException("가입되지 않은 회원입니다."));
//
//        String token = jwtAuthenticationProvider.createToken(member.getUsername(), member.getRoles());
//        response.setHeader("X-AUTH-TOKEN", token);
//
//        Cookie cookie = new Cookie("X-AUTH-TOKEN", token);
//        cookie.setPath("/");
//        cookie.setHttpOnly(true);
//        cookie.setSecure(true);
//        response.addCookie(cookie);
//
//        return member;
//    }

    @ApiOperation(value = "로그아웃")
    @PostMapping(value = "/logout")
    public void logout(HttpServletResponse response){
        Cookie cookie = new Cookie("X-AUTH-TOKEN", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);
    }

    @ApiOperation(value = "새로고침 시 갱신")
    @GetMapping(value = "/info")
    public User getInfo(){
        Object info = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(info != null && !(info instanceof String)){
            return (User)info;
        }
        return null;
    }


}
