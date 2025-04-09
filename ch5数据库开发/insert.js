// 导入mysql2模块
const mysql2 = require("mysql2")
// 创建连接conn
conn = mysql2.createConnection({
    host:"127.0.0.1",
    port:"3308",
    database:"test",
    user:"root",
    password:"root"
});

let sql = "INSERT INTO user (name, age, email) VALUES (?, ?, ?)";
// err: 出错信息； result：从数据库中查询到的记录集（结果集）
conn.query(sql, ["thomas", 38, "thomas@kdvtc.edu.cn"], (err, result) => {
    // if (err) throw err;
    if (err) {
        console.error(err);
    }

    console.log(result)
})

conn.end()
