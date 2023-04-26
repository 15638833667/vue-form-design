<!--
 * @Author: qiaoqiao
 * @Date: 2021-10-22 13:15:34
 * @LastEditTime: 2021-11-15 13:26:37
 * @Description:
-->
<template>
  <el-time-picker
    v-model="formData[item.prop]"
    :style="item.style?item.style:{width:'100%'}"
    :is-range="item.isRange"
    :clearable="item.clearable"
    :placeholder="item.placeholder"
    :picker-options="item.pickerOptions"
    :value-format="item.valueFormat"
    :align="item.align"
    :editable="item.editable"
    :arrow-control="item.arrowControl"
    :disabled="item.disabled"
    :range-separator="item.rangeSeparator"
    :start-placeholder="item.startPlaceholder?item.startPlaceholder:'开始日期'"
    :end-placeholder="item.endPlaceholder?item.endPlaceholder:'结束日期'"
    @change="change"
  />
</template>

<script>
import mixins from '../mixins'

export default {
  name: 'MyTimePicker',
  components: {},
  mixins: [mixins],
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    change() {
      this.mixinEvent({
        type: 'change',
        prop: this.item.prop,
        value: this.formData[this.item.prop]
      })
    }
  }
}
</script>
