package com.tw.rs.mapper;

import java.io.Reader;
import java.sql.Connection;
import java.util.List;

import com.tw.rs.bean.Definitions;
import com.tw.rs.mapper.DefinitionsMapper;
import com.tw.rs.util.DBUtil;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.jdbc.ScriptRunner;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

public class DefinitionsMapperTest {
    private static SqlSessionFactory sqlSessionFactory;
    private static DefinitionsMapper definitionsMapper;

    @BeforeClass
    public static void setUp() throws Exception {
        Reader reader = Resources.getResourceAsReader("./mybatis/mybatis-config.xml");
        sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        reader.close();

        SqlSession sqlSession = sqlSessionFactory.openSession();
        definitionsMapper = sqlSession.getMapper(DefinitionsMapper.class);
    }

    @Test
    public void should_return_one_definitions_success() throws Exception {

        Definitions definitions  = definitionsMapper.getDefinitionsBySectionId(1);
        Assert.assertEquals(definitions.getId(), 1);
    }

    @Test
    public void insert_One_definitions_success() throws Exception {

        Definitions definitions=new Definitions();
        definitions.setSectionId(1);
        definitions.setNormal(3);
        definitions.setHard(2);
        definitions.setEasy(4);

        definitionsMapper.insertDefinitions(definitions);
        Assert.assertEquals(definitions.getId(), 4);
        Assert.assertEquals(definitions.getSectionId(), 1);
        Assert.assertEquals(definitions.getHard(), 2);
        Assert.assertEquals(definitions.getEasy(), 4);
        Assert.assertEquals(definitions.getNormal(), 3);
    }

    @Test
    public void update_One_definitions_success() throws Exception {

        Definitions definitions=new Definitions();
        definitions.setSectionId(1);
        definitions.setNormal(3);
        definitions.setHard(2);
        definitions.setEasy(9);

        definitionsMapper.updateDefinitions(definitions);
        Assert.assertEquals(definitions.getSectionId(), 1);
        Assert.assertEquals(definitions.getHard(), 2);
        Assert.assertEquals(definitions.getEasy(), 9);
        Assert.assertEquals(definitions.getNormal(), 3);
    }

    @Test
    public void delete_one_definitions_success() throws Exception{
        Integer id=definitionsMapper.deleteDefinitionsBySectionId(3);
        assertThat(id, is(0));
    }

}
