<template>
  <div class="one">
    <!-- // -->
    <div class="ul">
      <ul>
        <li>
          首页
          <i class="el-icon-arrow-right"></i>
        </li>
        <li>
          权限管理
          <i class="el-icon-arrow-right"></i>
        </li>
        <li>角色列表</li>
      </ul>
    </div>

    <div class="ones">
      <!-- 搜索 -->
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary">添加用户</el-button>
      </div>
      <!-- 表格 -->
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>角色名称</th>
            <th>角色描述</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in biao" :key="index">
            <td>
              <i class="el-icon-arrow-right"></i>
            </td>
            <td>{{ index+1 }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.create_time }}</td>
            <td>
              <el-row>
                <el-button size="mini" type="primary" icon="el-icon-edit" circle></el-button>
                <el-button size="mini" type="danger" icon="el-icon-delete" circle></el-button>
                <el-button size="mini" type="warning" icon="el-icon-star-off" circle></el-button>
              </el-row>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 分页器 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      biao: [],
      currentPage4: 4,
      value: true,
    };
  },
  async created() {
    this.axios.get("../../static/json/user.json").then((msg) => {
      this.biao = msg.data.data.users;
      console.log(this.biao);
    });
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style scoped>
.ul ul li {
  color: #adabab;
  font-weight: bold;
  float: left;
  margin-left: 50px;
}
.ul {
  height: 80px;
  line-height: 80px;
}
.el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
  margin-top: 20px;
}
table {
  border-collapse: collapse;
  margin-top: 20px;
}
table tr th {
  border: 1px solid rgb(231, 220, 220);
  width: 300px;
  height: 50px;
  text-align: center;
}
table tr td {
  border: 1px solid rgb(231, 220, 220);
  width: 300px;
  height: 40px;
  text-align: center;
  color: rgb(128, 132, 136);
  padding: 10px;
}
.one {
  width: 1621px;
  height: 800px;
  background-color: #000;
  position: fixed;
  top: 80px;
  right: 0;
}
.ones {
  padding: 20px;
  width: 1480px;
  height: 600px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 20px;
}
.el-input-group {
  line-height: normal;
  display: inline-table;
  width: 300px;
  border-collapse: separate;
  border-spacing: 0;
}
</style>