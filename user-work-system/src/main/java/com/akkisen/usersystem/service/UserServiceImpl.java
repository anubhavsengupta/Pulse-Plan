package com.akkisen.usersystem.service;

import com.akkisen.usersystem.entity.UserEntity;
import com.akkisen.usersystem.model.User;
import com.akkisen.usersystem.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(user, userEntity);
        userRepository.save(userEntity);
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        List<UserEntity> userEntities = userRepository.findAll();

        List<User> users = userEntities.stream().map(userEntity -> new User(
                userEntity.getId(),
                userEntity.getFirstName(),
                userEntity.getLastName(),
                userEntity.getUsername(),
                userEntity.getPassword()
        ))
                .collect(Collectors.toList());

        return users;
    }

    @Override
    public User getUserById(Long id) {
        UserEntity specificUser = userRepository.findById(id).get();
        User user = new User();
        BeanUtils.copyProperties(specificUser, user);
        return user;
    }

    @Override
    public User getUserByUsername(String username) {
        UserEntity specificUser = userRepository.findByUsername(username).get();
        User user = new User();
        BeanUtils.copyProperties(specificUser, user);
        return user;
    }

    @Override
    public boolean deleteUser(Long id) {
        UserEntity user = userRepository.findById(id).get();
        userRepository.delete(user);
        return true;
    }

    @Override
    public User updateUser(Long id, User user) {
        UserEntity userEntity = userRepository.findById(id).get();
        userEntity.setUsername(user.getUsername());
        userEntity.setFirstName(user.getFirstName());
        userEntity.setLastName(user.getLastName());
        userRepository.save(userEntity);
        return user;
    }


}
