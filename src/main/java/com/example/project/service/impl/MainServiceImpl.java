package com.example.project.service.impl;

import com.example.project.mapper.MainMapper;
import com.example.project.service.MainService;
import com.example.project.vo.MainVo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MainServiceImpl implements MainService {

    @Autowired
    public MainMapper mainMapper;

    @Override
    public List<MainVo> getUserName(){
        List<MainVo> res = mainMapper.selectUserName();
        return res;
    }

}
