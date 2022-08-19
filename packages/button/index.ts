import  {App} from 'vue'
import MButton from './index.vue'

// 只有提供install方法才能使用Vue.use方法使用组件
MButton.install = (app: App) => {
  app.component(MButton.name, MButton)
}

export default MButton;