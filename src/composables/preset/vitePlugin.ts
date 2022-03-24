// import Vue from '@vitejs/plugin-vue'
// import VueJsx from '@vitejs/plugin-vue-jsx'
// import legacy from '@vitejs/plugin-legacy'
// import Components from 'unplugin-vue-components/vite'
// import AutoImport from 'unplugin-auto-import/vite'
// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'
// import Unocss from 'unocss/vite'
// import Pages from 'vite-plugin-pages'
// import svgLoader from 'vite-svg-loader'
// import checker from 'vite-plugin-checker'
// import OptimizationPersist from 'vite-plugin-optimize-persist'
// import PkgConfig from 'vite-plugin-package-config'
// import { ConfigEnv } from 'vite'
// import {
//   ElementPlusResolver,
//   VueUseComponentsResolver
// } from 'unplugin-vue-components/resolvers'
// function vitePlugins(env: ConfigEnv): any[] {
//   return [
//     Vue({
//       reactivityTransform: true
//     }),
//     VueJsx(),
//     PkgConfig(),
//     // https://github.com/hannoeru/vite-plugin-pages
//     Pages(),
//     // vite need esm browser ? i dont test this plugin  // 2022 . 3 . 12
//     legacy({
//       targets: ['ie >= 11'],
//       additionalLegacyPolyfills: ['regenerator-runtime/runtime']
//     }),
//     // svg need transform components example svg.svg  to  <svg />
//     svgLoader(),
//     // https://github.com/antfu/unplugin-auto-import
//     AutoImport({
//       dts: './src/auto-imports.d.ts',
//       // imports: ['vue', '@vueuse/core'],
//       // Generate corresponding .eslintrc-auto-import.json file.
//       // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
//       imports: ['vue', 'vue/macros', 'vue-router', 'pinia', '@vueuse/core'],
//       eslintrc: {
//         enabled: true, // Default `false`
//         filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
//         globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
//       },
//       // resolvers: [ElementPlusResolver()]
//       // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
//       // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
//       resolvers: [
//         ElementPlusResolver(),

//         // Auto import icon components
//         // 自动导入图标组件
//         IconsResolver({
//           prefix: 'Icon'
//         })
//       ]
//     }),
//     // https://github.com/antfu/vite-plugin-components
//     Components({
//       dts: './src/components.d.ts',
//       extensions: ['vue', 'tsx'],
//       deep: true,
//       include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/],
//       // imports 指定组件所在位置，默认为 src/components
//       dirs: ['src/components/', 'src/layout/', 'src/views'],
//       resolvers: [
//         IconsResolver(),
//         ElementPlusResolver(),
//         VueUseComponentsResolver()
//       ]
//     }),
//     Icons({
//       compiler: 'vue3',
//       autoInstall: true
//     }),
//     // https://github.com/antfu/unocss
//     // see unocss.config.ts for config
//     Unocss(),
//     env.mode === 'production'
//       ? null
//       : checker({
//           enableBuild: false,
//           typescript: true,
//           vueTsc: true,
//           eslint: {
//             lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"',
//             dev: {
//               logLevel: ['error']
//             }
//           }
//         }),
//     OptimizationPersist()
//   ]
// }
// export default vitePlugins
