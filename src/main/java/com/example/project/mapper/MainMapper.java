package com.example.project.mapper;

import com.example.project.vo.MainVo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface MainMapper {
    List<MainVo> selectUserName();
}
