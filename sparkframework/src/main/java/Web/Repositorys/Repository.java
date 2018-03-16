package Web.Repositorys;

import org.sql2o.Connection;
import org.sql2o.Sql2o;
import Web.Helper.DB;

import java.lang.reflect.Method;
import java.util.List;
import java.lang.reflect.Field;

public class Repository <V e>{
    protected Sql2o db;
    public Repository(){
        DB _db=new DB();
        db=_db.getDB();
    }
    /**
     * 根据属性名获取属性值
     * */
    private Object getFieldValueByName(String fieldName, Object o) {
        try {
            String firstLetter = fieldName.substring(0, 1).toUpperCase();
            String getter = "get" + firstLetter + fieldName.substring(1);
            Method method = o.getClass().getMethod(getter, new Class[] {});
            Object value = method.invoke(o, new Object[] {});
            return value;
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * 获取属性名数组
     * */
    private String[] getFiledName(Object o){
        Field[] fields=o.getClass().getDeclaredFields();
        String[] fieldNames=new String[fields.length];
        for(int i=0;i<fields.length;i++){
            System.out.println(fields[i].getType());
            fieldNames[i]=fields[i].getName();
        }
        return fieldNames;
    }
    void Insert(V temp){
        try(Connection conn = db.beginTransaction()){
            String [] field =getFiledName(temp);
            String sql="INSERT INTO "+temp.getClass().getName()+"(";
            for(int i=0 ;i<field.length;i++){

            }
            conn.createQuery("INSERT INTO r_PointInfo(r_userID, r_index, r_kmFlag, r_altitude, r_longitude, r_latitude, r_timestamp) VALUES (:id, :idx, :kf, :al, :lo, :la, :ts)")
                    .addParameter("id", id)
                    .addParameter("idx",idx)
                    .addParameter("kf", kf)
                    .addParameter("al", al)
                    .addParameter("lo", lo)
                    .addParameter("la", la)
                    .addParameter("ts", ts)
                    .executeUpdate();
            conn.commit();
        }
    }
}