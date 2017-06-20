package com.tw.rs.resource;

import org.glassfish.jersey.test.spi.TestContainerException;
import org.glassfish.jersey.test.spi.TestContainerFactory;
import org.junit.Test;

import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.*;
import java.util.Map;
import javax.ws.rs.client.Entity;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

public class PaperResourceTest extends TestBase {
    String basePath = "/papers";

    @Test
    public void should_return_papers_success() throws Exception {
        Response response = target(basePath).request().get();
        assertThat(response.getStatus(), is(200));

    }

    @Test
    public void should_return_paper_by_Id_success() throws Exception {

        Response response = target(basePath + "/1").request().get();
        Map result = response.readEntity(Map.class);

        assertThat(response.getStatus(), is(200));

        assertThat(result.get("id"), is(1));
        assertThat(result.get("name"), is("java"));
        assertThat(result.get("description"), is("java paper"));
    }

    @Test
    public void should_insert_paper_success() throws Exception {
        Map data = new HashMap();
        data.put("name", "jenkins");
        data.put("description", "jenkins test");

        Entity entity = Entity.entity(data, MediaType.APPLICATION_JSON_TYPE);
        Response response = target(basePath).request().post(entity);
        assertThat(response.getStatus(), is(201));
    }

    @Test
    public void should_delete_paper_success() throws Exception {
        Response response = target(basePath + "/3").request().delete();
        assertThat(response.getStatus(), is(204));
    }

    @Test
    public void should_update_paper_fail() throws Exception {
        Map data = new HashMap();

        data.put("name", "all");
        data.put("id", 4);
        data.put("description", "test");
        Entity entity = Entity.entity(data, MediaType.APPLICATION_JSON_TYPE);
        Response response = target(basePath + "/4").request().put(entity);
        assertThat(response.getStatus(), is(500));
    }
}
