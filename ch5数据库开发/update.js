// 替换成从dbUtil.js获取数据库连接对象
const dbUtil = require("./dbUtil")
pool = dbUtil.getConnPool();

// 更新小明的邮箱地址
let sql = "update user set email='小明@新浪邮箱'  where id=?";
pool.query(sql, [1], (err, result) => {
    // if (err) throw err;
    if (err) {
        console.error(err);
    }
    console.log(result)
})

//删除user表id=20的记录
delSql = "delete from user where id = ?"
pool.query(delSql, [20], (err, result) => {
    if (err) {
        console.error(err);
    }
    console.log(result)
})

