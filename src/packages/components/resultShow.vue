<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="60%"
    @close="closeDialog"
  >
    <ul
      class="form-list"
      :style="{
        background: $store.state.formConfig.bgColor,
      }"
    >
      <li v-for="(item, index) in data" :key="item.prop + index">
        <formRender :item="item" :formData="formData"></formRender>
      </li>
    </ul>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button @click="submit" type="primary">提 交</el-button>
    </span>
  </el-dialog>
</template>
<script>
import formRender from "../../components/Form/index.vue";
export default {
  name: "ExportJSON",
  components: {
    formRender,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array || Object,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      dialogVisible: false,
      formData: {},
    };
  },
  watch: {
    show: {
      handler: function (val) {
        this.dialogVisible = val;
      },
      immediate: true,
    },
    // data: {
    //   handler: function (val) {
    //     this.formData = {}
    //     val.forEach(item => {
    //       this.$set(this.formData, item.prop, '')
    //     });
    //   },
    //   immediate: true,
    //   deep: true,
    // },
  },
  created() {
    this.data.forEach((item) => {
      this.$set(this.formData, item.prop, "");
    });
  },
  methods: {
    submit() {
      this.$message.info(JSON.stringify(this.formData));
    },
    closeDialog() {
      this.formData = {};
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-dialog__body {
  padding: 20px;
  max-height: 400px;
  overflow: auto;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 10px;
    }
  }
}
</style>
