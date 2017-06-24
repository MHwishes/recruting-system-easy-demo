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

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;


public class PaperMapperTest {

    private static SqlSessionFactory sqlSessionFactory;
    private static PaperMapper paperMapper;

    @BeforeClass
    public static void setUp() throws Exception {
        Reader reader = Resources.getResourceAsReader("./mybatis/mybatis-config.xml");
        sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        reader.close();
        SqlSession sqlSession = sqlSessionFactory.openSession();
        paperMapper = sqlSession.getMapper(PaperMapper.class);
    }


    @Test
    public void should_return_AllPapers_success() throws Exception {


        List<Paper> papers = paperMapper.getAllPapers();
        Assert.assertEquals(papers.size(), 4);
    }

    @Test
    public void should_return_One_Paper_success() throws Exception {

        Paper paper = paperMapper.getPaperById(1);
        Assert.assertEquals(paper.getId(), 1);
    }

    @Test
    public void insert_One_Paper_success() throws Exception {

        Paper paper = new Paper();
        paper.setName("yu");
        paper.setDescription("description");

        paperMapper.insertPaper(paper);
        Assert.assertEquals(paper.getName(), "yu");
        Assert.assertEquals(paper.getDescription(), "description");
    }


    @Test
    public void update_One_Paper_success() throws Exception {

        Paper paper = new Paper();
        paper.setName("yu");
        paper.setDescription("description");
        paper.setId(1);

        paperMapper.updatePaper(paper);
        Assert.assertEquals(paper.getId(), 1);
        Assert.assertEquals(paper.getName(), "yu");
        Assert.assertEquals(paper.getDescription(), "description");
    }

    @Test
    public void delete_one_paper_success() throws Exception {
        Integer id = paperMapper.deletePaperById(3);
        assertThat(id, is(0));
    }


}
