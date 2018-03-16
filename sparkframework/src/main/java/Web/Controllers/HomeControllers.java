package Web.Controllers;

import Web.Helper.Answer;
import Web.Repositorys.AccountRepository;
import spark.ModelAndView;
import spark.template.freemarker.FreeMarkerEngine;

import java.util.Map;
import java.util.HashMap;

public class HomeControllers extends AbstractRequestHandler<EmptyPayload> {
    AccountRepository accountRepository;
    FreeMarkerEngine freeMarkerEngine;
    public HomeControllers(AccountRepository accountRepository,FreeMarkerEngine freeMarkerEngine) {
        super(EmptyPayload.class);
        this.accountRepository=accountRepository;
        this.freeMarkerEngine=freeMarkerEngine;
    }

    @Override
    protected Answer processImpl(EmptyPayload value, Map<String,String> urlParams, boolean shouldReturnHtml) {
        if (shouldReturnHtml){
            Map<String, Object> attributes = new HashMap<>();
            attributes.put("account", accountRepository.findAccounts());
            return Answer.ok(freeMarkerEngine.render(new ModelAndView(attributes, "index.ftl")));
        } else {
            return Answer.ok(dataToJson(accountRepository.findAccounts()));
        }
    }

}
