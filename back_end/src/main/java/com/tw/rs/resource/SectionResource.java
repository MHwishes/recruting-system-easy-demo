package com.tw.rs.resource;

import com.tw.rs.bean.Section;
import com.tw.rs.mapper.SectionMapper;

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


@Path("/sections")

public class SectionResource {

    @Inject
    private SectionMapper sectionMapper;

    @GET
    @Path("/{param}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getPaperById(
            @PathParam("param") int paperId) {

        Integer id = sectionMapper.selectIdByPaperId(paperId);

        if (id == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        Map<String, Object> map = new HashMap<>();
        map.put("id", id);

        return Response.status(Response.Status.OK).entity(map).build();
    }

}
