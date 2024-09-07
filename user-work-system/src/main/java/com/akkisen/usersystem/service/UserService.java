package com.akkisen.usersystem.service;

import com.akkisen.usersystem.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers();

    User getUserById(Long id);

    User getUserByUsername(String username);

    boolean deleteUser(Long id);

    User updateUser(Long id, User user);
}
