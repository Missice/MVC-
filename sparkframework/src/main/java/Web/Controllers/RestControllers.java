package Web.Controllers;

import Web.Helper.Answer;
import Web.Repositorys.BbsRepository;

import java.util.Map;

public class RestControllers  extends AbstractRequestHandler<EmptyPayload> {
    BbsRepository bbsRepository;

    public RestControllers(BbsRepository bbsRepository) {
        super(EmptyPayload.class);
        this.bbsRepository = bbsRepository;
    }

    @Override
    protected Answer processImpl(EmptyPayload value, Map<String, String> urlParams, boolean shouldReturnHtml) {
        String json = dataToJson(bbsRepository.boradList());
        return Answer.ok(json);
    }
}
