<template>
  <div class="wrap-login">
    <div class="content">
      <div class="logo">
      </div>
      <div class="login_box">
        <div class="login_form">
          <div class="login_title">登录</div>
          <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="login" class="loginBtn" type="primary">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { login } from 'network/user'
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: '123456'
        },
        loginFormRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      login() {
        // console.log(this.$refs);
        this.$refs['loginFormRef'].validate((valid) => {
          if(valid) {
            // alert('submit')
            login(this.loginForm).then(res => {
              // console.log(res);
              if(res.meta.status === 200){
                const token = res.data.token
                window.sessionStorage.setItem('token', token)

                this.$router.push('/home')

                this.$message({
                  message: '登录成功',
                  type: 'success'
                })
              }
            })
          }else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .wrap-login {
    width: 100%;
    height: 100%;
    background: url("~img/login/logo_bg.jpg");
  }

  .content {
    width: 500px;
    height: 532px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
  }

  .logo {
    width: 500px;
    height: 150px;
    margin: 0px auto;
    background: url("~img/login/logowz.png") no-repeat center;
  }

  .login_box {
    width: 360px;
    background: #FFFFFF;
    margin: 0px auto;
  }

  .login_title {
    font-size: 25px;
    text-align: center;
    color: #409eff;
    padding: 15px 0;
    width: 300px;
    margin: 0 auto;
    border-bottom: solid 1px #CCCCCC;
  }

  .el-form {
    width: 300px;
    margin: 0 auto;
    padding-bottom: 30px;
  }

  .el-form-item {
    margin: 30px auto 0;
  }

  .loginBtn {
    width: 100%;
  }
</style>
