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
        <li v-for="(item, index) in formList" :key="item.type + index">
          <el-button type="primary" size="small"
            >{{ item.label }}{{ index }}</el-button
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "VisibleAction",
  data() {
    return {
      formList: [],
      drapItem: {},
      enterStatus: false,
    };
  },
  created() {
    console.log("created", Math.random());
    this.$EventBus.$on("dragItem", (item) => {
      this.getDrapItem(item);
    });
  },
  methods: {
    // 拖拽元素进入
    dragenter(event) {
      event.preventDefault();
      this.enterStatus = true;
      // console.log("dragenter", { event });
    },
    // 拖拽元素离开
    dragleave(event) {
      // event.preventDefault();
      console.log(
        "dragleave",
        "---------------离开",
        event.target.tagName,
        event.target.className
      );
      if (event.target && event.target.className === "canvas-box") {
        this.enterStatus = false;
      }
    },
    // 拖拽元素结束
    handleDrap(event) {
      event.preventDefault();
      console.log("this.drapItem", this.drapItem.type);
      // if (Object.keys(this.drapItem).length) {
      if (this.enterStatus) {
        this.formList.push(this.drapItem);
      }
    },
    getDrapItem(item) {
      this.drapItem = item;
    },
  },
  beforeDestroy() {
    console.log("beforeDestroy", Math.random());
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
