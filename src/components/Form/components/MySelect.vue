<!--
 * @Author: qiaoqiao
 * @Date: 2021-10-22 13:15:34
 * @LastEditTime: 2021-11-15 15:07:09
 * @Description:
-->
<template>
  <el-select
    v-model="formData[item.prop]"
    :style="item.style ? item.style : { width: '100%' }"
    :placeholder="item.placeholder"
    :class="item.class"
    :allow-create="item.allowCreate"
    :filterable="item.filterable"
    :clearable="item.clearable"
    :disabled="item.disabled"
    :multiple="item.multiple"
    :multiple-limit="item.multipleLimit"
    @change="change"
  >
    <el-option
      v-for="option in selectOptions"
      :key="option.value ? option.value : option"
      :label="option.label ? option.label : option"
      :value="option.value ? option.value : option"
      :disabled="option.disabled"
    />
  </el-select>
</template>

<script>
import mixins from "../mixins";
export default {
  name: "MySelect",
  components: {},
  mixins: [mixins],
  data() {
    return {
      selectOptions: [],
    };
  },
  computed: {
    options() {
      if (this.item.options instanceof Array) {
        return this.item.options;
      } else {
        const list = this.item.options.split(",");
        return list.map((item) => {
          return { value: item, label: item };
        });
      }
    },
  },

  created() {},
  mounted() {
    if (this.item.type === "remote") {
      this.loadRemoteData();
    } else {
      this.loadLocalData(this.options);
    }
  },
  methods: {
    change() {
      this.mixinEvent({
        type: "change",
        prop: this.item.prop,
        value: this.formData[this.item.prop],
      });
    },
    loadLocalData(data) {
      this.selectOptions = data;
    },
    loadRemoteData() {
      this.getRequestData().then((response) => {
        if (response.code === 200) {
          this.selectOptions = response.data.list || response.data;
        }
      });
    },
    getRequestData() {
      return [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true,
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ];
    },
  },
};
</script>
