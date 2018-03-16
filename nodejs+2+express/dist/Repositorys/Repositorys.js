"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const options = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "xz",
    "database": "CourseDB",
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/Models/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/Models",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
};
class Repositorys {
    constructor() {
        console.log(options);
        this.conection = typeorm_1.createConnection(options);
    }
}
exports.Repositorys = Repositorys;
