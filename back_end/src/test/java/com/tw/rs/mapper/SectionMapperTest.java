package com.tw.rs.mapper;

import java.io.Reader;
import java.sql.Connection;

import com.tw.rs.bean.Section;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.jdbc.ScriptRunner;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import scala.xml.Null;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;


public class SectionMapperTest {

    private static SqlSessionFactory sqlSessionFactory;
    private static SqlSession sqlSession;
    private static SectionMapper sectionMapper;

    @BeforeClass
    public static void setUp() throws Exception {
        Reader reader = Resources.getResourceAsReader("./mybatis/mybatis-config.xml");
        sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        reader.close();

        sqlSession = sqlSessionFactory.openSession();

         sectionMapper = sqlSession.getMapper(SectionMapper.class);

    }

    @Test
    public void should_return_section_by_Id_success() throws Exception {

        Integer id = sectionMapper.selectIdByPaperId(1);
        assertThat(id, is(1));
    }


    @Test
    public void should_inserted_section() throws Exception {


        Section section = new Section();
        section.setType("logicPuzzle");
        section.setPaperId(4);
        sectionMapper.insertSection(section);
        assertThat(section.getPaperId(), is(4));
        assertThat(section.getType(), is("logicPuzzle"));

    }

    @Test
    public void should_update_section()throws Exception{

        Section section=new Section();
        section.setType("logicPuzzle");
        section.setPaperId(4);
        sectionMapper.updateSectionByPaperId(section);
        assertThat(section.getPaperId(),is(4));
        assertThat(section.getType(),is("logicPuzzle"));
    }


    @Test
    public void should_delete_section() throws Exception {

        Integer id = sectionMapper.deleteSectionByPaperId(3);
        assertThat(id, is(0));
    }
}
