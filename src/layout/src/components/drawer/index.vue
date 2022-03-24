<template>
  <el-button
    circle
    size="large"
    class="drawer-setting"
    @click="showDefaultSetting = true"
  >
    <el-icon class="is-loading" :size="27">
      <CarbonSettings />
    </el-icon>
  </el-button>
  <el-drawer
    v-model="showDefaultSetting"
    :with-header="false"
    :append-to-body="true"
    size="30%"
  >
    <div class="default-setting-container">
      <defaultSetting></defaultSetting>
    </div>
  </el-drawer>
</template>
<script setup lang="ts">
const showDefaultSetting = ref(false)
</script>
<style lang="scss" scoped>
.default-setting-container {
  margin: 10px 15px;
}
.drawer-setting {
  position: fixed;
  right: 0.5%;
  top: 39%;
  color: #5db5b6;
  font-size: 15px;
  border-color: #5db5b6;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 999;
}
:deep(.el-switch__core) {
  // height: 24px;
  transform: scale(1.3);
}
// :deep(.el-switch__action) {
//   transform: translateY(2px);
//   font-size: 20px;
// }
// :deep(.el-switch__inner) {
//   transform: translateY(2px);
// }
</style>
