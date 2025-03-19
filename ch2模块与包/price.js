// 新建price.js
function sumPrice(amount,price) { 
    return amount * price; 
} 

function add(a, b) {
    // 没有检查参数的合法性
    return a + b;
}

const name ="price模块"

// add函数也要一块导出，应该怎么写
// module.exports = {
//     sumPrice, add
// }

// calcTotal
module.exports = {
    // sumPrice:sumPrice, 
    calcTotal:sumPrice, 
    add:add,
    moduleName:name
}


module.exports.calcTotal = sumPrice
module.exports.add = add

