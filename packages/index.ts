import { App, Plugin} from 'vue'
import mButton from './button/index'
import mInput from './input'

// 注册所有组件
const install = (app: App): void => {
  app.use(mButton as any)
  app.use(mInput as any)
}

const MoUI = {
  install
}

export {
  mButton,
  mInput
}

export default MoUI;