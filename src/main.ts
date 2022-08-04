import { createApp } from 'vue'
// import './style.css'
// import MoUI from '../packages/index'
import MoUi from 'mozui'
import App from './App.vue'

const app = createApp(App);

app.use(MoUi)
// app.use(MoUI);
app.mount('#app')
