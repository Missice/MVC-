import { NextFunction, Request, Response, Router } from "express";
import { AbstractControllers } from "./AbstractControllers";
import {BbsRepository} from "../Repositorys/BbsRepository"
import {BbsBoardEntity} from "../Models/BbsBoardEntity"
export class RestController extends AbstractControllers {

  public static create(router: Router) {
    //log
    console.log("[RestController::create] Creating index route.");

    router.get("/rest/bbsboardlist", (req: Request, res: Response, next: NextFunction) => {
      new RestController().getBbsBoardList(req, res, next);
    });
    router.post("/rest/bbsboard", (req: Request, res: Response, next: NextFunction) => {
      var bs=new BbsBoardEntity();
      bs.boaedID=47;
      bs.boardName="fsadf"
      new BbsRepository().createEntityFromRow(bs);
    });
  }
  constructor() {
    super();
  }

  public async getBbsBoardList(req: Request, res: Response, next: NextFunction) {
    let result=await new BbsRepository().boradList()
    res.end(JSON.stringify(result));
  }
}