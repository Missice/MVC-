import { NextFunction, Request, Response } from "express";


export class AbstractControllers {

  private scripts: string[];



  constructor() {
    this.scripts = [];
  }
  public addScript(src: string): AbstractControllers {
    this.scripts.push(src);
    return this;
  }

  public render(req: Request, res: Response, view: string, options?: Object) {
    //add constants
    res.locals.BASE_URL = "/";

    //add scripts
    res.locals.scripts = this.scripts;

    //render view
    res.render(view, options);
  }
}