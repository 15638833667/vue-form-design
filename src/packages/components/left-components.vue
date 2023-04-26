<template>
  <div class="components-list-box">
    <h5>components-list</h5>
    <ul class="components-list">
      <li
        v-for="item in componentsList"
        :key="item.type"
        draggable="true"
        @dragover.prevent
        @dragstart="dragStart($event, item)"
        >
        <!-- @dragend="dragend($event, item)" -->
        <el-button type="text" size="small">{{ item.label }}</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LeftComponents",
  data() {
    return {
      componentsList: [
        // {
        //   type: "button",
        //   label: "按钮",
        // },
        {
          type: "input",
          label: "输入框",
        },
        {
          type: "switch",
          label: "开关",
        },
        {
          type: "select",
          label: "下拉框",
        },
        {
          type: "radio",
          label: "单选框",
        },
        {
          type: "checkbox",
          label: "复选框",
        },
      ],
    };
  },
  created() {},
  methods: {
    // 组件拖拽开始
    dragStart(event, item) {
      // console.log("dragStart", { event, item });
      this.$store.commit('SET_FORM_ITEM', item)
    },
    // 组件拖拽结束
    // dragend(event, item) {
    //   console.log("dragend", { event, item });
    // },
  },
};
</script>
<style lang="scss" scoped>
.components-list-box {
  h5 {
    margin: 0;
    line-height: 28px;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
    li {
      float: left;
      border-radius: 3px;
      border: 1px dashed #009588;
      background: rgba($color: #009588, $alpha: 0.1);
      margin-right: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      .el-button {
        padding: 10px 20px;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
