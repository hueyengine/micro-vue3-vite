// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app: any

const render = (container: any) => {

    app = createApp(App)
    app.use(createPinia())
    app.use(router)

    app.mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
    renderWithQiankun({
        mount(props: any) {
            const { container } = props
            render(container)
        },
        bootstrap() { },
        unmount() {
            app.unmount()
        }
    } as any)
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render(null)