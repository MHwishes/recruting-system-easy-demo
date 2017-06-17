package com.tw.rs.mapper;
import com.tw.rs.bean.Section;

public interface SectionMapper {

    Integer insertSection(Section section);
    Integer deleteSectionByPaperId(Integer id);
    Integer selectIdByPaperId(Integer id);
    Integer updateSectionByPaperId(Section section);
}
