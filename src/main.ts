import { createApp } from 'vue'
// import './style.css'
// import MoUI from '../packages/index'
// @ts-ignore
import MoUI from 'mozui'
// import 'mozui/dist/style.css';
import "/node_modules/mozui/dist/style.css";

import ElementUi from 'element-plus';
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App);

app.use(MoUI);
app.use(ElementUi);
app.mount('#app')
