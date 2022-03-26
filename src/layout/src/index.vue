<template>
  <drawer></drawer>
  <div>
    <el-container class="main-content">
      <el-header
        :height="`${getHeaderSetting.height}px`"
        :class="[
          settingStore.headerSetting.fixed ? ['header-fixed'] : '',
          settingStore.menuSetting.fixed ? ['menu-margin'] : ''
        ]"
        ><div style="color: red">Headesr</div></el-header
      >
      <el-container
        :class="settingStore.headerSetting.fixed ? ['page-content'] : ''"
        :style="[
          settingStore.headerSetting.fixed
            ? { marginTop: `${getHeaderSetting.height}px` }
            : ''
        ]"
      >
        <el-aside
          :class="[
            settingStore.menuSetting.fixed ? 'aside-fixed' : '',
            settingStore.menuSetting.headerFixed ? 'aside-headerFixed' : ''
          ]"
          :style="[
            settingStore.menuSetting.headerFixed
              ? { top: `${getHeaderSetting.height}px` }
              : ''
          ]"
          width="200px"
        >
          <div style="width: 100%; height: 500px; background-color: #bfa"></div>
        </el-aside>
        <el-container>
          <el-main
            :class="[
              settingStore.menuSetting.fixed ? ['menu-margin'] : '',
              settingStore.menuSetting.headerFixed ? ['menu-margin'] : ''
            ]"
          >
            <div style="height: 1500px">
              <el-button @click="showMessage">测试elmessage</el-button>
            </div>
            <div style="height: 1500px">
              <el-button @click="showMessage">测试elmessage</el-button>
            </div>
          </el-main>
          <el-footer
            :class="[
              settingStore.footerSetting.fixed ? 'page-footer' : '',
              settingStore.menuSetting.fixed ||
              settingStore.menuSetting.headerFixed
                ? ['menu-margin']
                : ''
            ]"
            :style="{ height: `${getFooterSetting.height}px` }"
          >
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { useProjectSettingStore } from '~/store/modules/projectSetting'
import { useProjectSetting } from '~/composables/setting/useProjectSetting'
const settingStore = useProjectSettingStore()
const { getHeaderSetting, getFooterSetting } = useProjectSetting()
console.log(getFooterSetting.value)
console.log(getFooterSetting)
const showMessage = () => {
  ElMessage({
    message: 'this is a message.',
    grouping: true,
    type: 'success'
  })
}
const height = ref(`${getFooterSetting.value.height}px`)
watch(height, newVal => {
  console.log(newVal)
})
console.log(height.value)
</script>
<style scoped lang="scss">
.menu-margin {
  margin-left: 200px;
}
.page-content {
  // margin-top: 80px;
}
.aside-fixed {
  position: fixed;
  top: 0px;
  left: 0;
  height: 100%;
}
.aside-headerFixed {
  position: fixed;
  left: 0;
  height: 100%;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fba;
}
.page-footer {
  position: fixed;
  bottom: 0;
  background-color: #abf;
  width: 100%;
}
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
  position: relative;
}
.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
  padding: 0;
}
.el-footer {
  height: v-bind(height);
}
</style>
