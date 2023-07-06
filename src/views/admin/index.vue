<template>
  <div id="admin">
    <el-container>
      <el-aside width="200px">
        <!-- 图标 -->
        <div class="logo" style="height: 60px"></div>
        <!-- 导航菜单 -->
        <div class="menu">
          <el-menu
            :default-active="defaultPath"
            active-text-color="#fff"
            background-color="#3FC5F0"
            class="el-menu-vertical-demo"
            router
            :collapse="isCollapse"
          >
            <el-menu-item index="/admin/test">
              <i class="el-icon-setting"></i>
              <span slot="title">test</span>
            </el-menu-item>
            <el-menu-item index="/admin/test2">
              <i class="el-icon-setting"></i>
              <span slot="title">test2</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <!-- header -->
        <el-header>

        </el-header>
        <el-main>
          <!-- 面包屑导航 -->
           <div class="breadcrumb">
             <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              :to="item.path"
              v-for="item in breadcrumbList"
              :key="item.id"
              >{{ item.name }}</el-breadcrumb-item
            >
          </el-breadcrumb>
           </div>
          <!-- 路由 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isCollapse:false,
      defaultPath: "/admin/test",
      // 面包屑数组
      breadcrumbList: [],
      currentPath: "",
    };
  },
  watch: {
    $route() {
      this.getBreadcrumbList();
      this.defaultPath = this.$route.path;
    },
  },
  methods: {
    getBreadcrumbList() {
      this.currentPath = this.$route.path;
      this.breadcrumbList = this.$route.matched;
    },
  },
  created() {
    this.defaultPath = this.$route.path;
    this.getBreadcrumbList();
      this.$notify({
          title: '欢迎',
          message: '欢迎访问本系统',
          duration: 2000,
           type: 'success'
        });
  },
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
}
.el-menu {
  height: calc(100vh - 60px);
}
.el-header {
  background-color: #3fc5f0;
}

.el-aside {
  background-color: #d3dce6;
}

.el-main {
  background-color: #fff;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.breadcrumb{
    margin-bottom: 20px;
}
</style>