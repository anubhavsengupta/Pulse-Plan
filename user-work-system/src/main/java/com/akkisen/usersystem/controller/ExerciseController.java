package com.akkisen.usersystem.controller;

import com.akkisen.usersystem.model.Exercise;
import com.akkisen.usersystem.model.User;
import com.akkisen.usersystem.service.ExerciseService;
import com.akkisen.usersystem.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/v1/")
public class ExerciseController {
    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @PostMapping("/exercises")
    public Exercise saveExercise(@RequestBody Exercise exercise) {
        return exerciseService.saveExercise(exercise);
    }

    @GetMapping("/exercises")
    public List<Exercise> getAllExercises() {
        return exerciseService.getAllExercises();
    }

}
