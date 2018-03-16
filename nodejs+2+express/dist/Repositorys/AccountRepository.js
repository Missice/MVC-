"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repositorys_1 = require("./Repositorys");
const AccountEntity_1 = require("../Models/AccountEntity");
class AccountRepository extends Repositorys_1.Repositorys {
    constructor() {
        super();
    }
    select() {
        this.conection.then((connection) => __awaiter(this, void 0, void 0, function* () {
            this.accountRepository = connection.getRepository(AccountEntity_1.AccountEntity);
            let sql = "SELECT account,psw FROM CourseAccount";
            return yield this.accountRepository.query(sql);
        })).catch(error => console.log(error));
    }
    createEntityFromRow(account) {
        this.conection.then((connection) => __awaiter(this, void 0, void 0, function* () {
            this.accountRepository = connection.getRepository(AccountEntity_1.AccountEntity);
            return yield this.accountRepository.save(account);
        })).catch(error => console.log(error));
    }
}
exports.AccountRepository = AccountRepository;
