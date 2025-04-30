const CODE_SUCCESS  = 0;
const CODE_ERROR  = 1;

class Result {
    constructor(code, message, data) {
      this.code = code;
      this.message = message;
      this.data = data;
    }
  
    // 这里需特别注意，js不能像java那样根据参数方法参数类型和数量区别重载方法；而是后者直接覆盖前者（同名方法）
    // static success() {
    //   return new Result(CODE_SUCCESS, "操作成功", null);
    // }

    // 通过参数数量判断使用场景
    static success(data) {
      if (arguments.length == 0) {
        return new Result(CODE_SUCCESS,  "操作成功", null);
      }

      return new Result(CODE_SUCCESS,  "操作成功", data);
    }    
  
    // 失败响应
    static error(message = "操作失败") {
      return new Result(CODE_ERROR, message, null);
    }
  
    // 链式调用设置字段（可选）
    setCode(code) {
      this.code = code;
      return this;
    }
    setMessage(message) {
      this.message = message;
      return this;
    }
    setData(data) {
      this.data = data;
      return this;
    }
  }
  
  module.exports = Result;