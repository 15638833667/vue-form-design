<template>
  <div class="visible-action">
    <div class="action-btns">
      <el-button size="medium">最终展示</el-button>
      <el-button size="medium">清空</el-button>
      <el-button size="medium">输出JSON</el-button>
    </div>
    <div
      class="canvas-box"
      @dragover.prevent
      @dragenter="dragenter"
      @dragleave="dragleave"
      @drop="handleDrap"
    >
      <ul class="form-list">
        <li v-for="(item, index) in formList" :key="item.prop + index">
          <formRender :item="item" :formData="formData"></formRender>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import componentsMap from '../../utils/componentsMap'
import formRender from '../../components/Form/index.vue';
export default {
  name: "VisibleAction",
  components: {
    formRender
  },
  data() {
    return {
      componentsMap,
      formData: {},
      formItemList: [],
      formList: [],
      drapItem: {},
      enterStatus: false,
    };
  },
  created() {
    this.$EventBus.$on("dragItem", (item) => {
      this.getDrapItem(item);
    });
  },
  methods: {
    // 拖拽元素进入
    dragenter(event) {
      event.preventDefault();
      this.enterStatus = true;
    },
    // 拖拽元素离开
    dragleave(event) {
      // event.preventDefault();
      if (event.target && event.target.className === "canvas-box") {
        this.enterStatus = false;
      }
    },
    // 拖拽元素结束
    handleDrap(event) {
      event.preventDefault();
      if (this.enterStatus) {
        this.formItemList.push(this.drapItem);
        this.formList.push(this.componentsMap[this.drapItem.type]);
        console.log(this.formList)
      }
    },
    getDrapItem(item) {
      this.drapItem = item;
    },
  },
  beforeDestroy() {
    this.$EventBus.$off("dragItem");
  },
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
