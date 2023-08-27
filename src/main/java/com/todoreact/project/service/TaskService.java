package com.todoreact.project.service;


import com.todoreact.project.model.Task;
import com.todoreact.project.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
    public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task>getAllTasks(){
    return taskRepository.findAll();
    }

    public Optional<Task>getTaskById(Long id){
    return taskRepository.findById(id);
    }

    public Task saveTask(Task task){
    return taskRepository.save(task);
    }

    public void deleteTask(Long id){
    taskRepository.deleteById(id);
    }

    public List<Task>getCompletedTasks(){
    return taskRepository.findByCompleted(true);
    }

    public List<Task>getTodoTasks(){
    return taskRepository.findByCompleted(false);

    }






}
