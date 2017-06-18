package com.tw.rs.resource;

import org.apache.ibatis.session.SqlSession;
import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.glassfish.jersey.test.TestProperties;
import com.tw.rs.util.DBUtil;
import javax.ws.rs.core.Application;

import com.tw.rs.mapper.UserMapper;
import com.tw.rs.mapper.PaperMapper;
import com.tw.rs.mapper.SectionMapper;
import com.tw.rs.mapper.DefinitionsMapper;

public class TestBase extends JerseyTest {
    @Override
    protected Application configure() {
        enable(TestProperties.DUMP_ENTITY);

        SqlSession session = DBUtil.getSession();
        PaperMapper paperMapper = session.getMapper(PaperMapper.class);
        SectionMapper sectionMapper=session.getMapper(SectionMapper.class);
        DefinitionsMapper definitionsMapper=session.getMapper(DefinitionsMapper.class);
        UserMapper userMapper = session.getMapper(UserMapper.class);

        return new ResourceConfig().register(new AbstractBinder() {

            @Override
            protected void configure() {
                bind(session).to(SqlSession.class);
                bind(paperMapper).to(PaperMapper.class);
                bind(sectionMapper).to(SectionMapper.class);
                bind(definitionsMapper).to(DefinitionsMapper.class);
                bind(userMapper).to(UserMapper.class);

            }
        }).packages("com.tw.rs.resource");
    }
}


