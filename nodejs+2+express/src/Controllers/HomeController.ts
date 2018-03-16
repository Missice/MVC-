import { NextFunction, Request, Response, Router } from "express";
import { AbstractControllers } from "./AbstractControllers";
import {AccountRepository} from "../Repositorys/AccountRepository"
import {AccountEntity} from "../Models/AccountEntity"


export class HomeController extends AbstractControllers {

  public static create(router: Router) {
    //log
    console.log("[IndexRoute::create] Creating index route.");

    //add home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new HomeController().index(req, res, next);
    });
  }
  constructor() {
    super();
  }
  public async index(req: Request, res: Response, next: NextFunction) {
    //set message
    let accountRepository=new AccountRepository();
    let json= await accountRepository.select();
    let options:Object={"str":JSON.stringify(json)};
    //render template
    this.render(req, res, "index", options);
  }
}