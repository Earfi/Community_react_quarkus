package org.ex.Dto.User;

import java.time.LocalDateTime;

public class UserInfo {
    private Integer userId;
    private String fullName;
    private String profile;

    public UserInfo(Integer userId, String fullName, String profile) {
        this.userId = userId;
        this.fullName = fullName;
        this.profile = profile;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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
