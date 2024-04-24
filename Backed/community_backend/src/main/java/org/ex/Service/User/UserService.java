package org.ex.Service.User;

import io.quarkus.elytron.security.common.BcryptUtil;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import org.ex.Dto.User.CreateUserDTO;
import org.ex.Dto.User.ListAllUserDTO;
import org.ex.Model.User.User;
import org.ex.Repository.User.UserRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@ApplicationScoped
public class UserService {

    @Inject
    UserRepository repository;

    public List<ListAllUserDTO> getAllUsers() {
        List<User> users = repository.listAll();
        return users.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private ListAllUserDTO convertToDTO(User user) {
        return new ListAllUserDTO(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getFirstName(),
                user.getLastName(),
                user.getNickName(),
                user.getGender(),
                user.getAge(),
                user.getBirthdate(),
                user.getEmail(),
                user.getGithub(),
                user.getPhone(),
                user.getAddress(),
                user.getRoles(),
                user.getProfile(),
                user.getCreate(),
                user.getUpdate()
        );
    }

    public ListAllUserDTO getUserById(Integer id) {
        User user = repository.findById(id);
        if (user != null) {
            return convertToDTO(user);
        }
        return null;
    }

    @Transactional
    public ListAllUserDTO createUser(CreateUserDTO userDto) {
        User user = new User();
        setUserFieldsCreate(user, userDto);
        user.persist();
        return convertToDTO(user);
    }

    private void setUserFieldsCreate(User user, CreateUserDTO userDto) {
        user.setUsername(userDto.getUsername());
        user.setPassword(BcryptUtil.bcryptHash(userDto.getPassword()));
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setNickName(userDto.getNickName());
        user.setGender(userDto.getGender());
        user.setAge(userDto.getAge());
        user.setBirthdate(userDto.getBirthdate());
        user.setEmail(userDto.getEmail());
        user.setGithub(userDto.getGithub());
        user.setPhone(userDto.getPhone());
        user.setAddress(userDto.getAddress());
        user.setRoles(userDto.getRoles());
        user.setProfile(userDto.getProfile());
        user.setCreate(LocalDateTime.now());
        user.setUpdate(LocalDateTime.now());
    }

    @Transactional
    public boolean existsByUsername(String username) {
        return User.count("username", username) > 0;
    }

    @Transactional
    public void removeUser(Integer userId) {
        Optional<User> userOptional = User.findByIdOptional(userId);
        userOptional.ifPresent(User::delete);
    }

    @Transactional
    public ListAllUserDTO updateUser(Integer userId, ListAllUserDTO dto) {
        User user = User.findById(userId);
        if (user != null) {
            updateUserFields(user, dto);
            user.persist();
            return convertToDTO(user);
        }
        return null;
    }

    private void updateUserFields(User user, ListAllUserDTO userDto) {
        user.setUsername(userDto.getUsername());
        String hashedPassword = hashPassword(userDto.getPassword());
        if (hashedPassword != null) {
            user.setPassword(hashedPassword);
        }
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setNickName(userDto.getNickName());
        user.setGender(userDto.getGender());
        user.setAge(userDto.getAge());
        user.setBirthdate(userDto.getBirthdate());
        user.setEmail(userDto.getEmail());
        user.setGithub(userDto.getGithub());
        user.setPhone(userDto.getPhone());
        user.setAddress(userDto.getAddress());
        user.setRoles(userDto.getRoles());
        user.setProfile(userDto.getProfile());
        user.setCreate(userDto.getCreate());
        user.setUpdate(LocalDateTime.now());
    }

    private String hashPassword(String password) {
        if (password != null && !password.isEmpty()) {
            return BcryptUtil.bcryptHash(password);
        } else {
            return null;
        }
    }

}
