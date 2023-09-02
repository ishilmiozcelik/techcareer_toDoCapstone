package com.todoreact.project.service;


import com.todoreact.project.model.Task;
import com.todoreact.project.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
    public class TaskService {

    //Crud operasyonları
    @Autowired
    private TaskRepository taskRepository;

    //veritabanından tüm taskleri getir
    public List<Task>getAllTasks(){
    return taskRepository.findAll();
    }

    //veritabanından id'ye göre taskleri getir
    public Optional<Task>getTaskById(Long id){
    return taskRepository.findById(id);
    }

    //taski insert ve update etme
    public Task saveTask(Task task){
    return taskRepository.save(task);
    }

    //taski id'ye göre sil
    public void deleteTask(Long id){
    taskRepository.deleteById(id);
    }

    //tamamlanmış olarak işaretlenen tüm taskleri getir
    public List<Task>getCompletedTasks(){
    return taskRepository.findByCompleted(true);
    }

    //tamamlanmamış tüm taskleri getir
    public List<Task>getTodoTasks(){
    return taskRepository.findByCompleted(false);

    }






}
