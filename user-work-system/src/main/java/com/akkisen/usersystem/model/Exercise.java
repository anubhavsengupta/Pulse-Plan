package com.akkisen.usersystem.model;

public class Exercise {
    private long id;
    private String name;
    private int sets;
    private int reps;
    private long userId;

    public Exercise() {

    }

    public Exercise(long id, String name, int sets, int reps, long userId) {
        this.id = id;
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.userId = userId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSets() {
        return sets;
    }

    public void setSets(int sets) {
        this.sets = sets;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}
