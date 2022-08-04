import { App } from 'vue'
import mInput from './index.vue'

mInput.install = (app: App) => {
  app.component(mInput.name, mInput)
}

export default mInput;