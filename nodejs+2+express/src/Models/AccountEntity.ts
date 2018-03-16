import {Entity, Column,PrimaryColumn} from "typeorm";

@Entity("CourseAccount")
export class AccountEntity {
    @PrimaryColumn({
    length: 40
    })
    account: string;
    @Column("text")
    psw : string;

    
}
