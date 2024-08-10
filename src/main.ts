import {createApp} from 'vue'
import App from './App.vue'

import './style.css'

import './demos/ipc'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

createApp(App)
    .use(ElementPlus as any)
    .mount('#app')
    .$nextTick(() => {
        postMessage({payload: 'removeLoading'}, '*')
    }).then(r => {
    console.log("load main App successful!")
})
