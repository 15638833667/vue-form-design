<template>
  <div class="right-config">
    <el-tabs v-model="activeName">
      <el-tab-pane
        label="组件属性"
        name="field"
        v-if="$store.state.formItem.itemType"
      >
        <FormItemConfig></FormItemConfig>
      </el-tab-pane>
      <el-tab-pane label="表单属性" name="form">
        <FormConfig></FormConfig>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import FormConfig from "./form-config.vue";
import FormItemConfig from "./form-item-config.vue";
export default {
  name: "RightConfig",
  components: {
    FormConfig,
    FormItemConfig,
  },
  data() {
    return {
      activeName: "form",
    };
  },
  created() {},
  watch: {
    "$store.state.formItem": {
      handler: function (val) {
        if (val.itemType) {
          this.activeName = "field";
        } else {
          this.activeName = "form";
        }
      },
      immediate: true,
    },
  },
  methods: {},
  beforeDestroy() {},
};
</script>
<style lang="scss" scoped>
.right-config {
  h5 {
    margin: 0;
    line-height: 28px;
    margin-bottom: 10px;
  }
}
</style>
