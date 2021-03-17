<template>
  <div class="home-wrap">
    <el-container>
      <el-header>
        <img class="logoImg" src="~assets/img/logo.png">
        <el-button @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="220px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      logout() {
        window.sessionStorage.clear()
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped>
.home-wrap, .el-container{
  width: 100%;
  height: 100%;
}
  .el-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #373f41;
  }
  .logoImg{
    height: 50px;
  }
  .el-aside{
    background-color: #333744;
  }
  .el-main{
    background-color: #eaedf1;
  }
</style>
