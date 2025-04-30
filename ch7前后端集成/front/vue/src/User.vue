<script setup>
    import {ref} from "vue"
    import axios from "axios"

    //定义同步变量 
    const userData = ref([])
    // 新增用户的临时数据
    const newUser = ref({id:null,  name: null, age: null, email: null });
    
    // 获取用户列表
    function listUser(){
        // axios.get("http://localhost:80/user/list")
        // 使用请求代理路径， 解决CORS跨域问题  
        axios.get("/api/user/list")
        .then(result => {
            // 注意：Axios 的响应对象 (result) 本身也有一层默认的 data 属性，
            userData.value = result.data.data
        })
        .catch(err => {
            console.log(err)
        })
    }

    //更新用户
    const updateUser = (userId) => {
        // 获取用户信息       
        axios.get("/api/user/get/" + userId)
        .then(response => {            
            // newUser.value = response.data.data;
            // alert(JSON.stringify(response.data))
            newUser.value = response.data.data;            
            // alert("newUser.value:" + JSON.stringify(newUser.value))
            showAddUserDiv.value = true;
        })
        .catch(err => {
            console.log(err)
            alert(response.data.msg)
        })
    };

    // 保存（新增或更新用户）
    const saveUser = () => {
        // ...展开运算符，将数组展开为参数列表
        // const id = userData.value.length ? Math.max(...userData.value.map(user => user.id)) + 1 : 1;        
        //id非自增, 也不要赋值，由后端生成后传入前端
        // userData.value.push({ id, ...newUser.value });   
        axios.post("/api/user/save", newUser.value, {
                headers: {
                    "Content-Type": "application/json", 
                }, 
            })
        .then(response => {
            // 恢复初始值
            newUser.value = {id:null,  name: null, age: null, email: null };
            showAddUserDiv.value = false;

            // 这里有 2 种方式处理某条数据被更新后的 列表更新
            //刷新用户列表
            listUser();
        })
        .catch(err => {
            console.log(err)
        })        
    };

    // 控制新增/更新用户信息的div的显示或隐藏
    const showAddUserDiv = ref(false);    
    // 显示新增/更新div
    const addUser = () => {
        showAddUserDiv.value = true;    
    };

    // 隐藏新增/更新div， 同时清空所有文本框
    const cancelAddUser = () => {
        newUser.value = {id:null,  name: null, age: null, email: null };
        showAddUserDiv.value = false;
    };

    // 删除用户
    const deleteUser = (id) => {
        if (!confirm('你确定要删除数据吗？')) {
            return;
        }

        // axios.post("/api/user/delete/${id}", newUser.value)
        // 也可以使用反引号嵌入变量'/api/user/del/${id}', 请求协议与后端保持一致（后端是DeleteMapping)
        axios.delete('/api/user/del/' + id)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })  

        userData.value = userData.value.filter((user) => user.id != id);
    };

    const searchUser = ref({ name: '', age: ''});
    // 条件查询
    const doSearch = (userName, userAge) => {
        // 这里可以根据 userName 和 userAge 做过滤或者发请求查询
        //console.log('查询用户:', userName.value, userAge.value);
        axios.get("/api/user/search", {params: {name: userName, age: userAge}})
        .then(result => {
            userData.value = result.data.data
        })
        .catch(err => {
            console.log(err)
        })
    };

    //触发获取用户列表
    listUser();
</script>

<template>
    <div>        
        <label>用户名:以<input v-model="searchUser.name" />开头</label> &nbsp;&nbsp;
        <label>年龄:大于<input v-model="searchUser.age" type="number" /></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="primary" @click="doSearch(searchUser.name, searchUser.age)">查询</el-button>&nbsp;&nbsp;
        <el-button type="primary" @click="addUser()">新增</el-button> 
    </div> 
    <br>
    <div id="tableDiv">
    <!-- 传统 html table
        <table border="1" cellpadding="10">
            <tr>
                <td >userId</td>
                <td >userName</td>
                <td >userAge</td>
                <td >email</td>
                <td >操作</td>
            </tr>
            <tr v-for = "user in userData">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.email}}</td>
                <td><button @click="addUser()" >新增</button> &nbsp;&nbsp; <button @click="deleteUser(user.id)" >&nbsp;删除&nbsp;</button></td>
            </tr>
        </table>            
        -->
        <!-- 使用element-plus -->
        <el-table :data="userData" stripe border>
            <el-table-column prop="id" label="ID" width="120"/>
            <el-table-column prop="name" label="姓名" width="120"/>
            <el-table-column prop="age" label="年龄" width="120"/>
            <el-table-column prop="email" label="邮箱" width="220"/>
            <el-table-column width="180" label="操作">                
                <template #default="{row}">
                    <el-button type="primary" @click="updateUser(row.id)">修改</el-button>&nbsp;&nbsp; 
                    <el-button type="primary" @click="deleteUser(row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

    

  <div v-if="showAddUserDiv" class="modal">
    <div class="modal-content">
      <span class="close" @click="cancelAddUser">&times;</span>
      <h3>新增用户</h3>
      <div>        
        <label>姓名: <input v-model="newUser.name" /><input hidden="true" v-model="newUser.id" /></label>
      </div>
      <div>
        <label>年龄: <input v-model="newUser.age" type="number" /></label>
      </div>
      <div>
        <label>邮箱: <input v-model="newUser.email" type="email" /></label>
      </div>
      <br>
      <button @click="saveUser">保存</button>&nbsp;&nbsp;
      <button @click="cancelAddUser">取消</button>
    </div>
  </div>

</template>

<style scoped>
    /* 模态对话框的背景样式 */
    .modal {
        display: block;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
    }

    /* 模态对话框内容样式 */
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 500px;
        border-radius: 10px;
        position: relative;
    }

    /* 关闭按钮样式 */
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
        .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
</style>
