package com.example.project.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "TB_IMAGE")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;

    private Long flagId;

    private String category;

    private String imagePath;

    public void setFlagId(Long flagId) {
        this.flagId = flagId;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
}