// 定义一个promise对象
const promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => {
        const flag = true;
        if (flag) {
            // promise传值， 任何类型
            // resolve("操作成功");
            resolve({id:100, name:"tom", age:19});
        } else {
            reject("操作失败");
        }
    }, 2000) //延迟2000毫秒执行
});

// 使用promise对象
promiseObj
    .then((result) => {console.log(result)})
    .catch((err) => {console.log(err)})
    .finally(() => {console.log("finally")})