package com.tw.rs.mapper;

import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.BeforeClass;
import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;


public class SectionMapperTest {

    private static SqlSessionFactory sqlSessionFactory;


    @BeforeClass
    public static void setUp() throws Exception {
        Reader reader = Resources.getResourceAsReader("./mybatis/mybatis-config.xml");
        sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        reader.close();
    }

    @Test
    public void should_return_section_by_Id_success() throws Exception {

        SqlSession sqlSession = sqlSessionFactory.openSession();

        SectionMapper sectionMapper = sqlSession.getMapper(SectionMapper.class);

        Integer id = sectionMapper.selectIdByPaperId(1);

        assertThat(id, is(1));
    }
}
