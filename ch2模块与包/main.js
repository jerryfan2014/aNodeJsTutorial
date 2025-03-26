// 导入format模块
let fo = require("./format")
// 方式1 本地定义products
// let products = [
//     { 
//     "name": "PC005-3A", 
//     "price": 108, 
//     "add_time":"2021-12-12" 
//     }, 
//     { 
//     "name": "PC008-1 with diode", 
//     "price": 216, 
//     "add_time":"2022-4-5" 
//     }, 
//     { 
//     "name": "PC008-3A", 
//     "price": 295, 
//     "add_time":"2022-12-7" 
//     } 
// ] 

// 方式2 将products定义到products.js文件中(数据和逻辑分离、共享)
let po = require("./products")
let products = po.products;
for (i =0 ; i < products.length; i++) {
    console.log(fo.formatDate(products[i].add_time));
}



