package com.example.project.controller;

import com.example.project.service.MainService;
import com.example.project.vo.MainVo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/")
//@AllArgsConstructor
public class MainController {

    @Autowired
    public MainService mainService;

    @GetMapping
    public List<MainVo> func(){
        List<MainVo> ans = mainService.getUserName();
        return ans;
    }

}