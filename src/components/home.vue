<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <ul>
        <li>公司名称-Logo</li>
        <li>后台管理系统</li>
        <li style="margin-left:600px">
          <el-button plain size="mini" @click="tui">退出</el-button>
        </li>
      </ul>
    </div>

    <!-- 图 -->
    <div class="img">
      <img src="../assets/u=3673444424,2212762539&fm=26&gp=0.jpg" alt="">
    </div>

    <!-- 左侧内容-->
    <div class="body">
      <!-- 1 -->
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="home">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 2 -->
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="home1">角色列表</el-menu-item>
              <el-menu-item index="1-2" @click="home2">权限列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 3 -->
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 4 -->
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 5 -->
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push({
        path: "/one",
      });
      this.$message({
        message: "获取用户列表成功",
        type: "success",
      });
    },
    home1() {
      this.$router.push({
        path: "/two",
      });
      this.$message({
        message: "获取角色列表成功",
        type: "success",
      });
    },
    home2() {
      this.$router.push({
        path: "/four",
      });
      this.$message({
        message: "获取权限列表成功",
        type: "success",
      });
    },
    tui() {
      this.$router.push({
        path: "/three",
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #444444;
}
.header ul li {
  float: left;
  color: #fff;
  line-height: 80px;
  font-weight: bold;
  margin: 0px 200px 0px 26px;
}
.body {
  width: 199px;
  background-color: #545c64;
  height: 800px;
}
.el-col-12 {
  width: 175px;
}
.img{
  position: fixed;
  top: 360px;
  left: 860px;
  width: 320px;
  height: 205px;
}
</style>