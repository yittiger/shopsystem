import Vue from 'vue'
import {Form, FormItem, Input, Button, Message} from 'element-ui'

Vue.use(Form)
  .use(FormItem)
  .use(Input)
  .use(Button)

Vue.prototype.$message = Message
