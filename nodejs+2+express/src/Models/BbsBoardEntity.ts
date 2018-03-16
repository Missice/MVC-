import {Entity, Column, PrimaryColumn} from "typeorm";
@Entity("bbsBoard")
export class BbsBoardEntity{
    @PrimaryColumn("int")
    boaedID:number;
    @Column("text")
    boardName: string;
}