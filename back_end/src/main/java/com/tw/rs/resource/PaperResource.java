package com.tw.rs.resource;

import com.tw.rs.bean.Paper;
import com.tw.rs.mapper.PaperMapper;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionManager;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Path("/papers")
public class PaperResource{

    @Inject
    private PaperMapper paperMapper;


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllPapers() {

        List<Paper> papers = paperMapper.getAllPapers();

        if (null == papers) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }


        List<Map> result = papers
                .stream()
                .map(paper -> {

                    Map<String, Object> map = new HashMap<>();
                    map.put("id", paper.getId());
                    map.put("name", paper.getName());
                    map.put("description", paper.getDescription());

                    return map;
                })
                .collect(Collectors.toList());

        return Response.status(Response.Status.OK).entity(result).build();
    }


    @Inject
    private SqlSession session;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)

    public Response insertPaper(Map data){

        System.out.print(data);

        String name=(String)data.get("name");
        String description=(String)data.get("description");

        Paper paper=new Paper();
        paper.setName(name);
        paper.setDescription(description);

        paperMapper.insertPaper(paper);
        session.commit();

        Map result = new HashMap();
        result.put("paperUri", "papers/" + paper.getId());

        return Response.status(Response.Status.CREATED).entity(result).build();
    }

}