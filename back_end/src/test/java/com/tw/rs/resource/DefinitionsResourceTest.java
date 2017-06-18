package com.tw.rs.resource;

import org.junit.Test;

import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.util.Map;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;


public class DefinitionsResourceTest  extends TestBase {
    String basePath = "/definitions";

    @Test
    public void should_return_definitions_by_sectionId_success() throws Exception{
        Response response = target(basePath + "/1").request().get();
        Map result = response.readEntity(Map.class);

        assertThat(response.getStatus(), is(200));

        assertThat(result.get("id"), is(1));
        assertThat(result.get("SectionId"), is(1));
        assertThat(result.get("hard"), is(2));
        assertThat(result.get("easy"), is(2));
        assertThat(result.get("normal"), is(2));

    }

}
