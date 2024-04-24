package org.ex.Dto.User;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class ListAllUserDTO {
    private Integer id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String nickName;
    private String gender;
    private Integer age;
    private String birthdate;
    private String email;
    private String github;
    private String phone;
    private String address;
    private String roles;
    private String profile;
    private LocalDateTime create;
    private LocalDateTime update;

    public ListAllUserDTO(Integer id, String username, String password, String firstName, String lastName, String nickName, String gender, Integer age, String birthdate, String email, String github, String phone, String address, String roles, String profile, LocalDateTime create, LocalDateTime update) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.gender = gender;
        this.age = age;
        this.birthdate = birthdate;
        this.email = email;
        this.github = github;
        this.phone = phone;
        this.address = address;
        this.roles = roles;
        this.profile = profile;
        this.create = create;
        this.update = update;
    }

    public ListAllUserDTO(Integer id, String img, String titleCart, String title, String descriptions, String category, BigDecimal weight, BigDecimal price, String rating, String stock, String outStock, LocalDateTime create, LocalDateTime update, Integer id1) {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
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
}
