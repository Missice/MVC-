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
const BbsBoardEntity_1 = require("../Models/BbsBoardEntity");
class BbsRepository extends Repositorys_1.Repositorys {
    constructor() {
        super();
    }
    boradList() {
        this.conection.then((connection) => __awaiter(this, void 0, void 0, function* () {
            this.bbsRepository = connection.getRepository(BbsBoardEntity_1.BbsBoardEntity);
            console.log(this.bbsRepository.query("SELECT * FROM bbsBoard"));
            return this.bbsRepository.query("SELECT * FROM bbsBoard");
        })).catch(error => console.log(error));
    }
    createEntityFromRow(Bbs) {
        this.conection.then((connection) => __awaiter(this, void 0, void 0, function* () {
            this.bbsRepository = connection.getRepository(BbsBoardEntity_1.BbsBoardEntity);
            this.bbsRepository.save(Bbs);
        })).catch(error => console.log(error));
    }
}
exports.BbsRepository = BbsRepository;
