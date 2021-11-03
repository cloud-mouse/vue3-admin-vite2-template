import path from 'path'
import { defineConfig, UserConfigExport, ConfigEnv } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import svgPlugin from 'vite-plugin-svg-sprite-component'
import { viteMockServe } from 'vite-plugin-mock'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return defineConfig({
    plugins: [
      vuePlugin(),
      svgPlugin({ symbolId: (name) => 'icon-' + name }),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
        supportTs: true
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'path': 'path-browserify'
      }
    }
    // server: {
    //   port: 3001, // 启动端口
    //   open: true,
    //   proxy: {
    //     // 选项写法 ps: 可以添加多个代理
    //     // '/dev': 'https://192.168.3.103:8105/' // 代理网址
    //     // 额外代理
    //     '/dev': {
    //       target: 'http://192.168.3.118:8105/',
    //       changeOrigin: true,
    //       rewrite: path => path.replace(/^\/dev/, '')
    //     }
    //   },
    //   cors: true
    // },
  })
}
