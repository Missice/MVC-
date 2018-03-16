"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractControllers {
    constructor() {
        this.scripts = [];
    }
    addScript(src) {
        this.scripts.push(src);
        return this;
    }
    render(req, res, view, options) {
        res.locals.BASE_URL = "/";
        res.locals.scripts = this.scripts;
        res.render(view, options);
    }
}
exports.AbstractControllers = AbstractControllers;
