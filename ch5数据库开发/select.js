// 替换成从dbUtil.js获取数据库连接对象
const dbUtil = require("./dbUtil")
// conn = dbUtil.getConnection()
pool = dbUtil.getConnPool();

// 防止sql注入风险，不要使用字符串拼接sql
// let sql = "select * from user where id = " + userId;
let sql = "select * from user where age = ? and name like ?";
// err: 出错信息； result：从数据库中查询到的记录集（结果集）
// conn.query(sql, [22, '小%'], (err, result) => {
pool.query(sql, [22, '小%'], (err, result) => {
    // if (err) throw err;
    if (err) {
        console.error(err);
    }
    console.log(result)
})

// dbUtil.closeConnection(conn)
