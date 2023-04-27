<template>
  <div class="visible-action">
    <div class="action-btns">
      <el-button size="medium">最终展示</el-button>
      <el-button size="medium" @click="clear">清空</el-button>
      <el-button size="medium">输出JSON</el-button>
    </div>
    <div
      class="canvas-box"
      @dragover.prevent
      @dragenter="dragenter"
      @dragleave="dragleave"
      @drop="handleDrap"
    >
      <ul
        class="form-list"
        :style="{
          background: $store.state.formConfig.bgColor,
        }"
      >
        <li
          v-for="(item, index) in $store.state.formList"
          :key="item.prop + index"
          @click="configItemInfo(item)"
        >
          <formRender :item="item" :formData="formData"></formRender>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import componentsMap from "../../utils/componentsMap";
import formRender from "../../components/Form/index.vue";
import { getUUID } from "../../utils/index";
export default {
  name: "VisibleAction",
  components: {
    formRender,
  },
  data() {
    return {
      componentsMap,
      formData: {},
      enterStatus: false,
    };
  },
  created() {},
  methods: {
    // 拖拽元素进入
    dragenter(event) {
      event.preventDefault();
      this.enterStatus = true;
    },
    // 拖拽元素离开
    dragleave(event) {
      event.preventDefault();
      if (event.target && event.target.className === "canvas-box") {
        this.enterStatus = false;
      }
    },
    // 拖拽元素结束
    handleDrap(event) {
      event.preventDefault();
      if (this.enterStatus) {
        const fieldItem = this.componentsMap[this.$store.state.formItem.type];

        this.$set(fieldItem, "prop", this.$store.state.formItem.type + this.$store.state.formList.length);
        this.$set(fieldItem, "fieldID", getUUID());

        this.$store.commit("PUSH_FORM_LIST", fieldItem);
      }
    },
    clear() {
      this.formItemList = [];
      this.formList = [];
    },
    configItemInfo(item) {
      this.$store.commit("SET_FORM_ITEM", item);
    },
  },
  beforeDestroy() {},
};
</script>
<style lang="scss" scoped>
.visible-action {
  width: 100%;
  height: 100%;
  .action-btns {
    margin-bottom: 14px;
  }
  .canvas-box {
    width: 100%;
    box-sizing: border-box;
    border: 1px dashed #eee;
    background: rgba($color: #999, $alpha: 0.1);
    height: calc(100% - 50px);
    padding: 20px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
