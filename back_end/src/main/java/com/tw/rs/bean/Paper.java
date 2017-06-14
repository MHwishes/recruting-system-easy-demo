package com.tw.rs.bean;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Paper {
    private int id;
    private String paperName;
//    private List<Section> sections;
    private String description;
    private Integer createTime;

    public Integer getCreateTime() {
        return createTime;
    }

    public int getId(){
        return id;
    }

//    public List<Section> getSections() {
//        return sections;
//    }

    public String getPaperName(){
        return paperName;
    }
    public String getDescription(){
        return description;
    }

    public void setCreateTime(Integer createTime) {
        this.createTime = createTime;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPaperName(String paperName) {
        this.paperName = paperName;
    }

//    public void setSections(List<Section> sections) {
//        this.sections = sections;
//    }

    public void setId(int id) {
        this.id = id;
    }

    public Map getPapersInfo() {
        Map result = new HashMap<>();

        result.put("uri", "papers/" + getId());
        result.put("paperName", getPaperName());
        result.put("description", getDescription());
        result.put("createTime", getCreateTime());
        result.put("id", getId());

        return result;
    }
}