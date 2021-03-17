import Vue from 'vue'
import {Form, FormItem, Input, Button, Message, Container, Header, Aside, Main} from 'element-ui'

Vue.use(Form)
  .use(FormItem)
  .use(Input)
  .use(Button)
  .use(Container)
  .use(Header)
  .use(Aside)
  .use(Main)

Vue.prototype.$message = Message
