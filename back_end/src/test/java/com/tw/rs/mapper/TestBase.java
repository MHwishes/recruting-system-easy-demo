//package com.tw.rs.mapper;
//
//import org.apache.ibatis.io.Resources;
//import org.apache.ibatis.jdbc.ScriptRunner;
//import org.apache.ibatis.session.SqlSession;
//import org.apache.ibatis.session.SqlSessionFactory;
//import org.apache.ibatis.session.SqlSessionFactoryBuilder;
//import org.glassfish.hk2.utilities.binding.AbstractBinder;
//import org.glassfish.jersey.server.ResourceConfig;
//import org.glassfish.jersey.test.JerseyTest;
//import org.glassfish.jersey.test.TestProperties;
//import com.tw.rs.util.DBUtil;
//import javax.ws.rs.core.Application;
//
//import org.junit.Before;
//import org.junit.BeforeClass;
//
//import java.io.Reader;
//import java.sql.Connection;
//
//public class TestBase {
//    private static SqlSessionFactory sqlSessionFactory;
//
//    @Before
//      public void   setUp() throws Exception {
//        Reader reader = Resources.getResourceAsReader("./mybatis/mybatis-config.xml");
//        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
//        reader.close();
//
////        SqlSession session = sqlSessionFactory.openSession();
////        Connection conn = session.getConnection();
////        reader = Resources.getResourceAsReader("./database/paper_initial.sql");
////        ScriptRunner runner = new ScriptRunner(conn);
////        runner.setLogWriter(null);
////        runner.runScript(reader);
////        conn.close();
////        reader.close();
////        session.close();
//    }
//}
//
//
