package org.ex.Dto.Post;

import org.ex.Dto.User.UserInfo;

import java.time.LocalDateTime;

public class ListAllPostDTO {
    private Integer id;
    public String title;
    public String imgPath;
    public Integer likes;
    public Integer comments;
    public Integer shares;
    private LocalDateTime create;
    private LocalDateTime update;
    private Integer userId;
    private String fullName;
    private String profile;
    private UserInfo userInfo;

    public ListAllPostDTO(Integer id, String title , String imgPath , Integer likes, Integer comments, Integer shares, Integer userId, LocalDateTime create, LocalDateTime update) {
        this.id = id;
        this.title = title;
        this.imgPath = imgPath;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
        this.userId = userId;
        this.create = create;
        this.update = update;
    }

    public ListAllPostDTO(Integer id, String title , String imgPath  , Integer likes, Integer comments, Integer shares, LocalDateTime update, LocalDateTime create, UserInfo userInfo) {
        this.id = id;
        this.title = title;
        this.imgPath = imgPath;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
        this.create = create;
        this.update = update;
        this.userInfo =userInfo;
    }

    public ListAllPostDTO(Integer id, String title  , String imgPath , Integer likes, Integer comments, Integer shares, LocalDateTime create, LocalDateTime update, Integer User_id, String fullName, String profile) {
        this.id = id;
        this.title = title;
        this.imgPath = imgPath;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
        this.create = create;
        this.update = update;
        this.userId = User_id;
        this.fullName = fullName;
        this.profile = profile;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Integer getComments() {
        return comments;
    }

    public void setComments(Integer comments) {
        this.comments = comments;
    }

    public Integer getShares() {
        return shares;
    }

    public void setShares(Integer shares) {
        this.shares = shares;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public LocalDateTime getCreate() {
        return create;
    }

    public void setCreate(LocalDateTime create) {
        this.create = create;
    }

    public LocalDateTime getUpdate() {
        return update;
    }

    public void setUpdate(LocalDateTime update) {
        this.update = update;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }
}
