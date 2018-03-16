"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractControllers_1 = require("./AbstractControllers");
const BbsRepository_1 = require("../Repositorys/BbsRepository");
class RestController extends AbstractControllers_1.AbstractControllers {
    static create(router) {
        console.log("[RestController::create] Creating index route.");
        router.get("/rest/bbsboardlist", (req, res, next) => {
            new RestController().getBbsBoardList(req, res, next);
        });
    }
    constructor() {
        super();
    }
    getBbsBoardList(req, res, next) {
        res.end(JSON.stringify(new BbsRepository_1.BbsRepository().boradList()));
    }
}
exports.RestController = RestController;
