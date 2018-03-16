package Web.Repositorys;

import Web.Helper.DB;
import Web.Models.BbsBoardEntity;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

public class BbsRepository {
    private Sql2o db;
    public BbsRepository(){
        DB _db=new DB();
        db=_db.getDB();
    }
    public List <BbsBoardEntity> boradList(){
        try (Connection conn = db.beginTransaction()) {//开始对数据库的操作
            List<BbsBoardEntity> boardList= conn.createQuery("SELECT boardID,boardName FROM bbsBoard").executeAndFetch(BbsBoardEntity.class);
            return boardList;
        }
    }
}
