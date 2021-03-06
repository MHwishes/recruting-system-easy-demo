package com.tw.rs.bean;

import java.util.HashMap;
import java.util.Map;

public class Section {
    private int id;
    private int paperId;
    private String type;

    public int getId() {
        return id;
    }

    public int getPaperId() {
        return paperId;
    }

    public String getType() {
        return type;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setPaperId(int paperId) {
        this.paperId = paperId;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Map getSectionsInfo() {
        Map result = new HashMap<>();

        result.put("paperId", getPaperId());
        result.put("type", getType());
        result.put("id", getId());

        return result;
    }
}
