<template>
  <div class="right-config">
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件属性" name="field" v-if="fieldItem.itemType">组件属性</el-tab-pane>
      <el-tab-pane label="表单属性" name="form">
        <FormConfig></FormConfig>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import FormConfig from './form-config.vue';
export default {
  name: "RightConfig",
  components: {
    FormConfig
  },
  data() {
    return {
      activeName: 'form',
      fieldItem: {}
    };
  },
  created() {
    this.$EventBus.$on("configItem", (item) => {
      this.getConfigItem(item);
    });
  },
  watch: {
    fieldItem(val){
      if(val.itemType){
        this.activeName = 'field'
      }
    }
  },
  methods: {
    getConfigItem(item) {
      console.log(item);
      this.fieldItem = item;
    },
  },
  beforeDestroy() {
    console.log("移除configItem", new Date().getTime());
    this.$EventBus.$off("configItem");
  },
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
