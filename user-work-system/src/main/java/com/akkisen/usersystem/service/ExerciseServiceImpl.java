package com.akkisen.usersystem.service;

import com.akkisen.usersystem.entity.ExerciseEntity;
import com.akkisen.usersystem.model.Exercise;
import com.akkisen.usersystem.repository.ExerciseRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class ExerciseServiceImpl implements ExerciseService{
    private ExerciseRepository exerciseRepository;

    public ExerciseServiceImpl(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    @Override
    public Exercise saveExercise(Exercise exercise) {
        ExerciseEntity exerciseEntity = new ExerciseEntity();
        BeanUtils.copyProperties(exercise, exerciseEntity);
        exerciseRepository.save(exerciseEntity);
        return exercise;
    }

    @Override
    public List<Exercise> getAllExercises() {
        List<ExerciseEntity> exerciseEntities = exerciseRepository.findAll();

        List<Exercise> exercises = exerciseEntities.stream().map(exerciseEntity -> new Exercise(

                exerciseEntity.getId(),
                exerciseEntity.getName(),
                exerciseEntity.getSets(),
                exerciseEntity.getReps(),
                exerciseEntity.getUserId()
        ))
                .collect(Collectors.toList());

        return exercises;

    }
}
