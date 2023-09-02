package com.todoreact.project.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

    @Entity
    public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id; //task id
    private String name; //task ismi
    private boolean completed; //task durumu


    //constructors, getter/setters
    public Task(){
    }

    public Task(Long id, String name, boolean completed) {
    this.id = id;
    this.name = name;
    this.completed = completed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
