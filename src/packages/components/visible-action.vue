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
          @dragstart="dragstartItem(item, index)"
          @dragenter="dragenterItem($event, index)"
          @dragover="dragoverItem($event, index)"
          draggable="true"
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
      // 源对象的下标
      dragIndex: '',
      // 目标对象的下标
      enterIndex: '',
      timeout: null,
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
        console.log(this.$store.state.formItem)
        // 新建元素时执行
        if(!this.$store.state.formItem.fieldID){
          const fieldItem = {
            ...this.componentsMap[this.$store.state.formItem.type],
          };
  
          this.$set(
            fieldItem,
            "prop",
            this.$store.state.formItem.type +
              (this.$store.state.formList && this.$store.state.formList.length)
          );
          this.$set(fieldItem, "fieldID", getUUID());
  
          this.$store.commit("PUSH_FORM_LIST", fieldItem);
  
          this.$store.state.formList.forEach((item) => {
            this.$set(this.formData, item.prop, "");
          });
        }
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
      // console.log(this.$store.state.formList);
      this.resultShowDialog.show = true;
    },
    closeShow() {
      this.resultShowDialog.show = false;
    },
    configItemInfo(item) {
      this.$store.commit("SET_FORM_ITEM", item);
    },
    // 拖拽排序
    dragstartItem(item, index) {
      this.$store.commit("SET_FORM_ITEM", item);
      console.log("start index ===>>> ", index);
      this.dragIndex = index;
    },

    // dragenter 和 dragover 事件的默认行为是拒绝接受任何被拖放的元素。
    // 因此，我们要在这两个拖放事件中使用`preventDefault`来阻止浏览器的默认行为
    dragenterItem(e, index) {
      e.preventDefault();
      this.enterIndex = index;
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
      // 拖拽事件的防抖
      this.timeout = setTimeout(() => {
        if (this.dragIndex !== index) {
          this.enterStatus = false;
          const list = JSON.parse(JSON.stringify(this.$store.state.formList));
          const source = list[this.dragIndex];
          
          list.splice(this.dragIndex, 1);
          list.splice(index, 0, source);
          console.log(list)
          this.$store.commit('SET_FORM_LIST', list);
          // 排序变化后目标对象的索引变成源对象的索引
          this.dragIndex = index;
        }
      }, 100);
    },
    dragoverItem(e) {
      e.preventDefault();
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
    overflow: auto;
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
