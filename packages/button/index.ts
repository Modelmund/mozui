import  {App} from 'vue'
import mButton from './index.vue'

// 只有提供install方法才能使用Vue.use方法使用组件
mButton.install = (app: App) => {
  app.component(mButton.name, mButton)
}

export default mButton;