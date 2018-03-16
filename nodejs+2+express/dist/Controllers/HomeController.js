"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractControllers_1 = require("./AbstractControllers");
const AccountRepository_1 = require("../Repositorys/AccountRepository");
class HomeController extends AbstractControllers_1.AbstractControllers {
    static create(router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            new HomeController().index(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        let accountRepository = new AccountRepository_1.AccountRepository();
        let json = accountRepository.select();
        let options = { "str": JSON.stringify(json) };
        this.render(req, res, "index", options);
    }
}
exports.HomeController = HomeController;
