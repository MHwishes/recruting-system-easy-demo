package com.tw.rs.resource;

import com.tw.rs.bean.Paper;
import com.tw.rs.mapper.PaperMapper;

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

@Path('/paper')
public class PaperResource{

    @Inject
    private PaperMapper paperMapper;

    @Inject
    private SqlSession session;

    @POST
    @Produces(MediaType.APPLICATION_JSON)

    public Response inserPaper(Map data){
        String paperName=(String)data.get("paperName");
        String description=(String)data.get("description");
        Integer createTime=(Interger)data.get("createTime");

        Paper paper=new Paper();
        paper.setPapername(paperName);
        paper.setDescription(description);
        paper.setCreateTime(createTime);

        paperMapper.insertPaper(paper);
        session.commit();

        Map result = new HashMap();
        result.put("paperUri", "papers/" + paper.getId());

        return Response.status(Response.Status.CREATED).entity(result).build();
    }

}