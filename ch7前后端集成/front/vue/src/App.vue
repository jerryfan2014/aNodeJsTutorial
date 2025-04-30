<template>
  <el-container style="height: 100vh">
    <!-- 顶部 header 区域 -->
    <el-header style="height: 10%; background-color:lightblue; display: flex; align-items: center; padding: 0 20px;">
      <h1>用户管理系统</h1>
    </el-header>
    <el-container>
      <!-- 左侧菜单区域 -->
      <el-aside width="20%" class="has-separator">
        <el-menu :default-active="activeMenu" mode="vertical">
          <el-menu-item index="1">用户列表</el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容区域 -->
      <el-main class="full-height">
        <div class="container full-height">
          <div class="centered-content full-height">
            <User />
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import User from "./User.vue";

// 定义当前激活的菜单
const activeMenu = ref('1');
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 95%;
}


.has-separator {
  border-right: 1px solid #ccc; /* 设置右边框作为分割线 */
  box-sizing: border-box; /* 确保边框包含在元素宽度内 */
}

.centered-content {
  width: 98%; /* 撑满父元素宽度 */
  height: 98%; /* 撑满父元素高度 */
}

.full-height {
  height: 100%;
}
</style>    