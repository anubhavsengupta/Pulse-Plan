package com.akkisen.usersystem.service;

import com.akkisen.usersystem.model.Exercise;

import java.util.List;

public interface ExerciseService {
    Exercise saveExercise(Exercise exercise);

    List<Exercise> getAllExercises();
}
