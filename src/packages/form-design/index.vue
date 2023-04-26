<template>
  <div class="form-design-box">
    <!-- 左侧可拖拽组件 -->
    <div class="left-component-box">
      <leftComponents></leftComponents>
    </div>
    <!-- 中间可操作区域 -->
    <div class="visible-action-box">
      <visibleAction></visibleAction>
    </div>
    <!-- 左侧配置区域 -->
    <div class="right-config-box">
      <rightConfig></rightConfig>
    </div>
  </div>
</template>
<script>
import leftComponents from "../components/left-components.vue";
import visibleAction from "../components/visible-action.vue";
import rightConfig from "../components/right-config.vue";
export default {
  name: "FormDesign",
  components: {
    leftComponents,
    visibleAction,
    rightConfig,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.form-design-box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 85vh;
  .left-component-box {
    width: 260px;
    height: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    border-right: 0;
  }
  .visible-action-box {
    width: calc(100% - 520px);
    height: 100%;
    padding: 20px;
    border: 1px solid #ddd;
  }
  .right-config-box {
    width: 260px;
    height: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    border-left: 0;
  }
}
</style>
