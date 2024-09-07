package com.akkisen.usersystem.repository;

import com.akkisen.usersystem.entity.ExerciseEntity;
import com.akkisen.usersystem.entity.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ExerciseRepository extends JpaRepository<ExerciseEntity, Long>  {

}
