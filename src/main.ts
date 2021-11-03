import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/theme-chalk/src/index.scss'
import '@/styles/index.scss' // global css
import store from './store'
import router from './router'
import '@/styles/mixin.scss'
import '@/styles/variables.scss'
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import { MockMethod } from 'vite-plugin-mock'
const mockModules = import.meta.globEager('../mock/*.ts')
import { registerIcons } from '@/icons' // icon
import '@/permission' // permission control

/**
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
   const mockList: MockMethod[] = []
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   Object.entries(mockModules).map(([_, v]) => v.default.map((mock: MockMethod) => {
      mockList.push(mock)
   }))
   createProdMockServer(mockList)
}

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
registerIcons(app)
app.use(ElementPlus, {
   locale: zhCn
}).use(store)
   .use(router)

router.isReady().then(() => app.mount('#app'))
