package com.tw.rs.resource;
import org.junit.Test;

import javax.ws.rs.core.Response;
import java.util.Map;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

public class SectionResourceTest extends TestBase {
    String basePath = "/sections";

    @Test
    public void should_return_section_by_Id_success() throws Exception{
        Response response = target(basePath + "/1").request().get();
        Map result = response.readEntity(Map.class);

        assertThat(response.getStatus(), is(200));

        assertThat(result.get("id"), is(1));

    }
}
