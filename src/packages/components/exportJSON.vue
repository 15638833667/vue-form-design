<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="60%"
    @close="closeDialog"
  >
    <json-viewer :value="data" :expand-depth="5"></json-viewer>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: "ExportJSON",
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
    //     console.log(val);
    //   },
    //   immediate: true,
    //   deep: true,
    // },
  },
  created() {},
  methods: {
    handleClose() {},
    closeDialog() {
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
  .jv-container {
    .jv-code {
      padding: 0;
    }
  }
}
</style>
