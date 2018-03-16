import {Repository} from "typeorm";
import {AccountEntity} from "../Models/AccountEntity"
import {getManager} from "typeorm";
import { NextFunction, Request, Response, Router } from "express";
export class AccountRepository {
        accountRepository:Repository<AccountEntity>;
         
        constructor(){
            this.accountRepository=getManager().getRepository(AccountEntity);
        }
        async select():Promise<AccountEntity[]>{
                var result=await  this.accountRepository.find();
                let str=JSON.stringify(result);
                console.log(str);
               return result;
        }   
        async createEntityFromRow(account:AccountEntity){
                await this.accountRepository.save(account);
        }
        
}