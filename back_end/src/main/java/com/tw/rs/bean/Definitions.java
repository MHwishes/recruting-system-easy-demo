package com.tw.rs.bean;

import java.util.HashMap;
import java.util.Map;

public class Definitions {

    private int id;
    private int sectionId;
    private int hard;
    private int normal;
    private int easy;


    public int getId(){
        return id;
    }
    public int getSectionId(){
        return sectionId;
    }
    public int getHard(){
        return hard;
    }
    public int getNormal(){ return  normal;}
    public int getEasy(){ return  easy;}

    public void setId(int id) {
        this.id = id;
    }
    public void setSectionId(int sectionId) {
        this.sectionId = sectionId;
    }
    public void setHard(int hard) {this.hard = hard;}
    public void setNormal(int normal){this.normal=normal;}
    public void setEasy(int easy){this.easy=easy;}


    public Map getSectionsInfo() {
        Map result = new HashMap<>();

        result.put("id", getId());
        result.put("sectionId", getSectionId());
        result.put("hard", getHard());
        result.put("normal", getNormal());
        result.put("easy",getEasy());


        return result;
    }
}
