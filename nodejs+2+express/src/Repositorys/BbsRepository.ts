import {Repository} from "typeorm";
import {BbsBoardEntity} from "../Models/BbsBoardEntity";
import {getManager} from "typeorm";
import { NextFunction, Request, Response, Router } from "express";
export class BbsRepository{
    bbsRepository:Repository<BbsBoardEntity>;
        constructor(){
            this.bbsRepository=getManager().getRepository(BbsBoardEntity);
        }
        async boradList():Promise<BbsBoardEntity>{
            let   result=await this.bbsRepository.query("SELECT boaedID,boardName FROM bbsBoard");
                return result;
        }
        async createEntityFromRow(Bbs:BbsBoardEntity){
                console.log(Bbs);
                await this.bbsRepository.save(Bbs);
            
        }
        
        
}