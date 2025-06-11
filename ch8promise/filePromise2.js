import {promises as fsPromise} from "fs"

try{
    const filePath = "./README.md"
    const data = await fsPromise.readFile(filePath);
    console.log("async/await语法：" + data.toString())
}catch(err) {
    throw err;
} 