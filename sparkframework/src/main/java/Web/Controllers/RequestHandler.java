package Web.Controllers;

import Web.Helper.Validable;
import Web.Helper.Answer;
import java.util.Map;

public interface RequestHandler<V extends Validable> {

    Answer process(V value, Map<String, String> urlParams, boolean shouldReturnHtml);

}
