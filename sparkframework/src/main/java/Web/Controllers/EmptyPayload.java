package Web.Controllers;

import Web.Helper.Validable;

/**
 * Created by federico on 24/07/15.
 */
public class EmptyPayload implements Validable {
    @Override
    public boolean isValid() {
        return true;
    }
}
