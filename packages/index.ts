import { App, Plugin} from 'vue'
import MButton from './button/index'
import MInput from './input/index'

// 注册所有组件
const install = (app: App): void => {
  app.use(MButton as any)
  app.use(MInput as any)
}

const MoUI = {
  install
}

export {
  MButton,
  MInput
}

export default MoUI;