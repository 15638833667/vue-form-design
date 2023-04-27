<template>
  <el-form ref="form" label-position="top" :model="form">
    <el-form-item label="标签名称">
      <el-input v-model="form.label"></el-input>
    </el-form-item>
    <el-form-item
      label="占位符"
      v-if="form.itemType === 'Input'"
    >
      <el-input v-model="form.placeholder"></el-input>
    </el-form-item>
    <el-form-item
      label="最大输入长度"
      v-if="form.itemType === 'Input'"
    >
      <el-slider v-model="form.maxlength" style="padding: 0 12px" :max="200">
      </el-slider>
    </el-form-item>
    <el-form-item label="字段KEY">
      <el-input v-model="form.prop"></el-input>
    </el-form-item>
    <el-form-item
      label="options"
      v-if="
        $store.state.formItem.itemType === 'Select' ||
        $store.state.formItem.itemType === 'Radio' ||
        $store.state.formItem.itemType === 'Check'
      "
    >
      <el-checkbox-group v-model="form.options">
        <el-checkbox
          :label="item"
          name="type"
          :key="item"
          v-for="item in optionsList"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "FormConfig",
  data() {
    return {
      form: {
        fieldID: "",
        label: 0,
        placeholder: "",
        maxlength: null,
        prop: null,
        options: null,
      },
      optionsList: [
        "北京",
        "上海",
        "广州",
        "松江",
        "徐汇",
        "黄浦",
        "浦东",
        "普陀",
        "静安",
      ],
    };
  },
  watch: {
    form: {
      handler: function (val) {
        this.$store.state.formList.forEach((formItem, index) => {
          if (val && formItem && formItem.fieldID === val.fieldID) {
            this.$store.commit('SET_FORM_LIST_ITEM', {index, item: val})
          }
        });
      },
      deep: true,
    },
    "$store.state.formItem": {
      handler: function (val) {
        if (val.itemType) {
          this.form = { ...val };
        }
      },
      immediate: true,
      deep: true
    },
  },
  created() {
    // this.form = { ...this.$store.state.formItem };
    // console.log(this.form)
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.el-slider__input {
  width: 50px;
}
</style>
