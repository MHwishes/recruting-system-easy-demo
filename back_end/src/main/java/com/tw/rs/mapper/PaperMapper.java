package com.tw.rs.mapper;

import com.tw.rs.bean.Paper;
import java.util.List;

public interface PaperMapper {

    List<Paper> getAllPapers();

//    Item findItemById(Integer id);
//
   Integer insertPaper(Paper paper);
   Integer updatePaper(Paper paper);
//
  Integer deletePaperById(Integer id);


}