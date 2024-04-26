package org.ex.Dto.User;

public class InfoCardUserDto {
    private Integer id;
    private String firstName;
    private String lastName;
    private String profile;

    public String getFullName() {
        return firstName + " " + lastName;
    }

    public InfoCardUserDto(Integer id, String firstName, String lastName, String profile) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profile = profile;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }
}
