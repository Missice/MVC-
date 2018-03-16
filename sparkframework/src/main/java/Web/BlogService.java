package Web;

import Web.Controllers.RestControllers;
import Web.Controllers.HomeControllers;
import Web.Repositorys.AccountRepository;
import Web.Repositorys.BbsRepository;
import freemarker.cache.ClassTemplateLoader;
import freemarker.template.Configuration;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import spark.template.freemarker.FreeMarkerEngine;
import java.io.*;

import static spark.Spark.get;

public class BlogService
{
  public static String dataToJson(Object data) {
      try {
          ObjectMapper mapper = new ObjectMapper();
          mapper.enable(SerializationFeature.INDENT_OUTPUT);
          StringWriter sw = new StringWriter();
          mapper.writeValue(sw, data);
          return sw.toString();
      } catch (IOException e){
          throw new RuntimeException("IOException from a StringWriter?");
      }
  }

    public static void main( String[] args) {
        AccountRepository accountRepository = new AccountRepository();
        BbsRepository bbsRepository = new BbsRepository();
        // get all post (using HTTP get method)

        FreeMarkerEngine freeMarkerEngine = new FreeMarkerEngine();
        Configuration freeMarkerConfiguration = new Configuration();
        freeMarkerConfiguration.setTemplateLoader(new ClassTemplateLoader(BlogService.class, "/"));



        freeMarkerEngine.setConfiguration(freeMarkerConfiguration);
        get("/", new HomeControllers(accountRepository,freeMarkerEngine));
        get("/rest/bbsboardlist", new RestControllers(bbsRepository));
    }
}
