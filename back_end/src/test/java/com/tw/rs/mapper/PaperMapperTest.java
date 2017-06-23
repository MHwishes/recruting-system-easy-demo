package com.tw.rs.mapper;

import java.io.Reader;
import java.sql.Connection;
import java.util.List;

import com.tw.rs.bean.Paper;
import com.tw.rs.bean.User;
import com.tw.rs.mapper.PaperMapper;
import com.tw.rs.util.DBUtil;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.jdbc.ScriptRunner;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;


public class PaperMapperTest {

    private static SqlSessionFactory sqlSessionFactory;


    @BeforeClass
    public static void setUp() throws Exception {
        Reader reader = Resources.getResourceAsReader("./mybatis/mybatis-config.xml");
        sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        reader.close();
    }


    @Test
    public void should_return_Paper_success() throws Exception {
        SqlSession sqlSession = sqlSessionFactory.openSession();

        PaperMapper paperMapper = sqlSession.getMapper(PaperMapper.class);

        List<Paper> papers = paperMapper.getAllPapers();
        sqlSession.close();
        Assert.assertEquals(papers.size(), 3);
    }
}
