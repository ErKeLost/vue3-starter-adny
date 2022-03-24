<template>
  <div class="setting">
    <span class="setting-title">项目配置</span>
    <el-divider> <span class="setting-title-sub"> 主题化 </span></el-divider>
    <el-switch
      v-model="show"
      size="large"
      :width="50"
      inline-prompt
      active-color="#000"
      inactive-color="#000"
      border-color="#fff"
      :active-icon="IcBaselineWbSunny"
      :inactive-icon="CarbonMoon"
    />
    <el-divider>
      <NetFix></NetFix>
    </el-divider>
    <el-divider>
      <span class="setting-title-sub"> 系统主题 </span>
    </el-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <el-divider>
      <span class="setting-title-sub"> 导航栏模式 </span>
    </el-divider>
    <div class="drawer-setting-item align-items-top">
      <div class="drawer-setting-item-style align-items-top">
        <el-tooltip effect="dark" content="左侧菜单模式" placement="top-start">
          <img
            src="../../../../assets/images/nav-theme-dark.svg"
            alt="左侧菜单模式"
            @click="togNavMode('vertical')"
          />
        </el-tooltip>
        <span class="setting-title-sub-er">左侧菜单模式</span>
        <div class="setting-choose">
          <el-badge v-show="settingStore.navMode === 'vertical'" is-dot />
        </div>
      </div>
      <div class="drawer-setting-item-style align-items-top">
        <el-tooltip effect="dark" content="内容模式" placement="top-start">
          <div class="mode mode-single" @click="togNavMode('content')" />
        </el-tooltip>
        <span class="setting-title-sub-er">内容模式</span>
        <div class="setting-choose">
          <el-badge v-show="settingStore.navMode === 'content'" is-dot />
        </div>
      </div>
      <div class="drawer-setting-item-style align-items-top">
        <el-tooltip effect="dark" content="底部模式" placement="top-start">
          <div class="mode mode-footer" @click="togNavMode('footer')" />
        </el-tooltip>
        <span class="setting-title-sub-er">底部模式</span>
        <div class="setting-choose">
          <el-badge v-show="settingStore.navMode === 'footer'" is-dot />
        </div>
      </div>
      <div class="drawer-setting-item-style align-items-top">
        <el-tooltip effect="dark" content="底部模式" placement="top-start">
          <div class="mode mode-footer-fix" @click="togNavMode('footer-fix')" />
        </el-tooltip>
        <span class="setting-title-sub-er">底部混合模式</span>
        <div class="setting-choose">
          <el-badge v-show="settingStore.navMode === 'footer-fix'" is-dot />
        </div>
      </div>

      <div class="drawer-setting-item-style align-items-top">
        <el-tooltip effect="dark" content="顶部菜单模式" placement="top-start">
          <img
            src="../../../../assets/images/nav-horizontal.svg"
            alt="顶部菜单模式"
            @click="togNavMode('horizontal')"
          />
        </el-tooltip>
        <span class="setting-title-sub-er">顶部菜单模式</span>
        <div class="setting-choose">
          <el-badge v-show="settingStore.navMode === 'horizontal'" is-dot />
        </div>
      </div>

      <div class="drawer-setting-item-style align-items-top">
        <el-tooltip
          effect="dark"
          content="顶部菜单混合模式"
          placement="top-start"
        >
          <img
            src="../../../../assets/images/nav-horizontal-mix.svg"
            alt="顶部菜单混合模式"
            @click="togNavMode('horizontal-mix')"
          />
        </el-tooltip>
        <span class="setting-title-sub-er">顶部菜单混合模式</span>
        <div class="setting-choose">
          <el-badge v-show="settingStore.navMode === 'horizontal-mix'" is-dot />
        </div>
      </div>
    </div>

    <el-divider>界面功能</el-divider>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">固定顶栏</div>
      <div class="drawer-setting-switch-action">
        <el-switch v-model="settingStore.headerSetting.fixed" />
      </div>
    </div>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">固定侧边栏</div>
      <div class="drawer-setting-switch-action">
        <el-switch
          v-model="settingStore.menuSetting.fixed"
          :disabled="settingStore.menuSetting.headerFixed"
        />
      </div>
    </div>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">不占据Header的固定侧边栏</div>
      <div class="drawer-setting-switch-action">
        <el-switch
          v-model="settingStore.menuSetting.headerFixed"
          :disabled="settingStore.menuSetting.fixed"
        />
      </div>
    </div>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">固定Footer</div>
      <div class="drawer-setting-switch-action">
        <el-switch v-model="settingStore.footerSetting.fixed" />
      </div>
    </div>
    <div class="drawer-setting-slider">
      <div class="drawer-setting-switch-title">Heade高度</div>
      <div class="slider">
        <el-slider
          v-model="settingStore.headerSetting.height"
          :min="60"
          :max="150"
        />
      </div>
    </div>
    <div class="drawer-setting-slider">
      <div class="drawer-setting-switch-title">Footer高度</div>
      <div class="slider">
        <el-slider
          v-model="settingStore.footerSetting.height"
          :min="60"
          :max="150"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useProjectSettingStore } from '~/store/modules/projectSetting'
import CarbonMoon from '~/components/Icon/CarbonMoon.vue'
import IcBaselineWbSunny from '~/components/Icon/IcBaselineWbSunny.vue'
const settingStore = useProjectSettingStore()
const show = ref(false)
function togNavMode(mode: any) {
  settingStore.navMode = mode
  settingStore.menuSetting.mixMenu = false
}
</script>
<style lang="scss">
.slider {
  width: 60%;
}
.slider-demo-block {
  display: flex;
  align-items: center;
}
.setting {
  display: grid;
  justify-items: center;
  &-choose {
    height: 20px;
  }
}
.setting-title {
  font-size: 18px;
  &-sub {
    font-size: 15px;
    &-er {
      font-size: 13px;
      padding: 10px 0;
    }
  }
}
.drawer-setting-switch {
  font-size: 13px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
}
.drawer-setting-slider {
  font-size: 13px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
}
.drawer-setting-item {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  &-style {
    display: grid;
    justify-items: center;
  }
}
.mode {
  position: relative;
  width: 50px;
  height: 45px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  background-color: #f3f3f3;
  // margin-bottom: 10px;
  // box-shadow: 0 0 15px 1px #aaa;
  transition: 0.3s;
  &:hover {
    // box-shadow: 0 0 15px 1px #666;
  }
  &::before,
  &::after {
    pointer-events: none;
  }
  &-white {
    border: 1px solid #eee;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 100%;
      background-color: #ffffff;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: #ffffff;
    }
  }
  &-black {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 100%;
      background-color: #181818;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: #181818;
    }
  }
  &-footer {
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 12px;
      background-color: #303030;
    }
  }
  &-footer-fix {
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 12px;
      background-color: #303030;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 12px;
      background-color: #303030;
    }
  }
  &-side {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 100%;
      background-color: #131313;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 15px;
      width: 100%;
      height: 10px;
      background-color: #fff;
    }
  }
  &-head {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: #ffffff;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0;
      width: 15px;
      height: calc(100% - 0px);
      background-color: rgb(22, 22, 22);
    }
  }
  &-single {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 100%;
      // background-color: #fff;
    }
  }
  i {
    position: absolute;
    right: 2px;
    bottom: 2px;
    display: none;
  }
  &.active i {
    display: block;
    color: #409eff;
  }
}
.mode-hover {
  &:hover {
    // box-shadow: 0 0 15px 1px #666;
  }
}
</style>
