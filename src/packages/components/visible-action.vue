<template>
  <div class="visible-action">
    <div class="action-btns">
      <el-button size="medium" @click="resultShow">最终展示</el-button>
      <el-button size="medium" @click="clear">清空</el-button>
      <el-button size="medium" @click="exportJSON">输出JSON</el-button>
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
    <ExportJSON
      :show="exportJSONDialog.show"
      @close="closeJson"
      :data="$store.state.formList"
    ></ExportJSON>
    <ResultShow
      v-if="resultShowDialog.show"
      :show="resultShowDialog.show"
      @close="closeShow"
      :data="$store.state.formList"
    ></ResultShow>
  </div>
</template>
<script>
import componentsMap from "../../utils/componentsMap";
import formRender from "../../components/Form/index.vue";
import ExportJSON from "./exportJSON.vue";
import ResultShow from "./resultShow.vue";
import { getUUID } from "../../utils/index";
export default {
  name: "VisibleAction",
  components: {
    formRender,
    ExportJSON,
    ResultShow,
  },
  data() {
    return {
      componentsMap,
      formData: {},
      enterStatus: false,
      exportJSONDialog: {
        show: false,
      },
      resultShowDialog: {
        show: false,
      },
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

        this.$set(
          fieldItem,
          "prop",
          this.$store.state.formItem.type + (this.$store.state.formList && this.$store.state.formList.length)
        );
        this.$set(fieldItem, "fieldID", getUUID());

        this.$store.commit("PUSH_FORM_LIST", fieldItem);
      }
    },
    clear() {
      this.formItemList = [];
      this.formList = [];
    },
    exportJSON() {
      this.exportJSONDialog.show = true;
    },
    closeJson() {
      this.exportJSONDialog.show = false;
    },
    resultShow() {
      this.resultShowDialog.show = true;
    },
    closeShow() {
      this.resultShowDialog.show = false;
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
        border: 1px dashed #ddd;
      }
    }
  }
}
</style>
