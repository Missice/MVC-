package Web.Helper;

import org.sql2o.Sql2o;

public class DB{
    private  Sql2o db;
    public DB(){
        db=new Sql2o("jdbc:mysql://" + Config.dbHost + ":" + Config.dbPort + "/" + Config.dbDB,
                Config.deUser, Config.dbPassword);//连接数据库，并新建一个连接的对象，或者可以称之为接口
    }
    public  Sql2o getDB(){
        return db;
    }
}