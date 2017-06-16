package com.tw.rs.bean;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Paper {
    private int id;
    private String name;
    private String description;


    public int getId(){
        return id;
    }
    public String getName(){
        return name;
    }
    public String getDescription(){
        return description;
    }

    public void setId(int id) {
        this.id = id;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setName(String name) {
        this.name = name;
    }


    public Map getPapersInfo() {
        Map result = new HashMap<>();

        result.put("name", getName());
        result.put("description", getDescription());
        result.put("id", getId());

        return result;
    }
}