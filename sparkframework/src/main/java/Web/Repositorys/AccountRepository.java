package Web.Repositorys;

import Web.Models.AccountEntity;
import Web.Helper.DB;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

public class AccountRepository {
    private Sql2o db;
    public AccountRepository(){
        DB _db=new DB();
        db=_db.getDB();
    }
    public List <AccountEntity> findAccounts(){
        try (Connection conn = db.beginTransaction()) {//开始对数据库的操作
            List<AccountEntity> accountList= conn.createQuery("SELECT account,psw FROM CourseAccount").executeAndFetch(AccountEntity.class);
            return accountList;
        }
    }
}