<template>
  <el-form ref="form" label-position="top" :model="form">
    <el-form-item label="标签宽度">
      <el-slider v-model="form.labelWidth" style="padding: 0 12px" :max="999">
      </el-slider>
    </el-form-item>
    <el-form-item label="标签展示模式">
      <el-radio-group v-model="form.labelStatus">
        <el-radio label="col">同行</el-radio>
        <el-radio label="row">单独一行</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="背景颜色"
      >
      <el-color-picker v-model="form.bgColor">
      </el-color-picker>
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
        bgColor: null
      },
    };
  },
  watch: {
    form: {
      handler: function (val) {
        this.$store.commit("SET_FORM_CONFIG", val);
      },
      deep: true,
    },
  },
  created() {
    this.form = this.$store.state.formConfig;
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.el-slider__input {
  width: 50px;
}
</style>
