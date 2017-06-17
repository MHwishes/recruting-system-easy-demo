package com.tw.rs.resource;

import com.tw.rs.bean.Definitions;
import com.tw.rs.mapper.DefinitionsMapper;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Path("/definitions")

public class DefinitionsResource {

    @Inject
    private DefinitionsMapper definitionsMapper;

    @GET
    @Path("/{param}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUserById(
            @PathParam("param") int sectionId) {

        Definitions definitions = definitionsMapper.getDefinitionsBySectionId(sectionId);

        if (definitions == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        Map<String, Object> map = new HashMap<>();
        map.put("id", definitions.getId());
        map.put("SectionId", definitions.getSectionId());
        map.put("hard", definitions.getHard());
        map.put("normal", definitions.getNormal());
        map.put("easy", definitions.getEasy());

        return Response.status(Response.Status.OK).entity(map).build();
    }
}