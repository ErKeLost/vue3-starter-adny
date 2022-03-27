/// <reference types="vitest" />

import path from 'path'
// import child_process from 'child_process'
// import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import legacy from '@vitejs/plugin-legacy'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
// import svgLoader from 'vite-svg-loader' // 打包问题
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import {
  ElementPlusResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
const pathSrc = path.resolve(__dirname, 'src')
// function pathResolve(dir: string) {
//   return path.resolve(process.cwd(), '.', dir)
// }
// const commitHash = child_process
//   .execSync('git rev-parse --short HEAD')
//   .toString()
//   .trim()
export default defineConfig(async (env) => {
  // const viteEnv = loadEnv(env.mode, `.env.${env.mode}`)
  return {
    base: './',
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        // 全局引入了 scss 的文件
        scss: {
          additionalData: `
        @import "~/styles/variables.scss";
      `,
          javascriptEnabled: true
        }
      }
    },
    build: {
      minify: 'terser',
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      // 在生产环境移除console.log
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      assetsDir: 'static/assets',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    server: {
      host: true, // host设置为true才可以使用network的形式，以ip访问项目
      port: 8080, // 端口号
      // open: true, // 自动打开浏览器
      cors: true, // 跨域设置允许
      strictPort: true, // 如果端口已占用直接退出
      // 接口代理
      proxy: {
        '/api': {
          // 本地 8000 前端代码的接口 代理到 8888 的服务端口
          target: 'http://localhost:8888/',
          changeOrigin: true, // 允许跨域
          rewrite: (path) => path.replace('/api/', '/')
        }
      }
    },
    plugins: [
      Vue({
        reactivityTransform: true
      }),
      // svgLoader(),  // 目前测试 使用该插件 导致打包 svg 会有问题
      VueJsx(),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages(),
      Inspect(), // 仅适用于开发模式
      // vite need esm browser ? i dont test this plugin  // 2022 . 3 . 12
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        // imports: ['vue', '@vueuse/core'],
        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        imports: ['vue', 'vue/macros', 'vue-router', 'pinia', '@vueuse/core'],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [
          // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            // 动态转换前缀
            prefix: 'Icon'
          })
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts')
      }),

      // https://github.com/antfu/vite-plugin-components
      Components({
        extensions: ['vue', 'tsx'],
        deep: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/],
        // imports 指定组件所在位置，默认为 src/components
        dirs: ['src/components/', 'src/layout/', 'src/views'],
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          VueUseComponentsResolver()
        ],
        dts: path.resolve(pathSrc, 'components.d.ts')
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true
      }),
      env.mode === 'production'
        ? null
        : checker({
            enableBuild: false,
            typescript: true,
            vueTsc: true,
            eslint: {
              lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"',
              dev: {
                logLevel: ['error']
              }
            }
          }),
      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss(),
      PkgConfig(),
      OptimizationPersist()
    ],

    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom'
    }
  }
})
