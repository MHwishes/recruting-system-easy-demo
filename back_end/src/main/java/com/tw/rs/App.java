/**
 * Created by afaren on 9/29/16.
 */
package com.tw.rs;

import com.tw.rs.mapper.PaperMapper;
import com.tw.rs.mapper.UserMapper;
import com.tw.rs.mapper.SectionMapper;
import com.tw.rs.mapper.DefinitionsMapper;

import com.tw.rs.util.DBUtil;
import org.apache.ibatis.session.SqlSession;
import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.glassfish.jersey.server.ResourceConfig;

import javax.ws.rs.ApplicationPath;

@ApplicationPath("resources")
public class App extends ResourceConfig {

    public App() {
        final SqlSession session = DBUtil.getSession();
        final UserMapper userMapper = session.getMapper(UserMapper.class);
        final PaperMapper paperMapper = session.getMapper(PaperMapper.class);
        final SectionMapper sectionMapper = session.getMapper(SectionMapper.class);
        final DefinitionsMapper definitionsMapper= session.getMapper(DefinitionsMapper.class);



        packages("com.tw.rs.resource")
                .register(new AbstractBinder() {
                    @Override
                    protected void configure() {
                        bind(userMapper).to(UserMapper.class);
                        bind(session).to(SqlSession.class);
                        bind(paperMapper).to(PaperMapper.class);
                        bind(sectionMapper).to(SectionMapper.class);
                        bind(definitionsMapper).to(DefinitionsMapper.class);
                    }
                });
    }
}