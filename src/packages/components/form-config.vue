<template>
  <el-form ref="form" label-position="top" :model="form">
    <el-form-item label="标签宽度">
      <el-slider v-model="form.labelWidth" style="padding: 0 12px;" :max="200"> </el-slider>
    </el-form-item>
    <el-form-item label="标签展示模式">
      <el-radio-group v-model="form.labelStatus">
        <el-radio :label="1">同行</el-radio>
        <el-radio :label="0">单独一行</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "FormConfig",
  data() {
    return {
      form: {
        labelWidth: 0,
        labelStatus: "",
      },
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.el-slider__input {
  width: 50px;
}
</style>
