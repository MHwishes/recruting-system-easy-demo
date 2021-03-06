package com.tw.rs.mapper;
import com.tw.rs.bean.Definitions;

public interface DefinitionsMapper {

    Integer insertDefinitions(Definitions definitions);
    Integer deleteDefinitionsBySectionId(Integer id);
    Integer updateDefinitions(Definitions definitions);
    Definitions getDefinitionsBySectionId(Integer sectionId);
}

