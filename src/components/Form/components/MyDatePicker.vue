<!--
 * @Author: qiaoqiao
 * @Date: 2021-10-22 13:15:34
 * @LastEditTime: 2021-11-15 13:25:55
 * @Description:
-->
<template>
  <el-date-picker
    v-model="formData[item.prop]"
    :style="item.style?item.style:{width:'100%'}"
    :disabled="item.disabled"
    :type="item.type"
    :editable="item.editable"
    :clearable="item.clearable"
    :value-format="item.valueFormat"
    :format="item.format"
    :align="item.align"
    :class="item.class"
    :placeholder="item.placeholder"
    :picker-options="item.pickerOptions"
    :default-value="item.defaultValue"
    :range-separator="item.rangeSeparator"
    :start-placeholder="item.startPlaceholder ? item.startPlaceholder : '开始日期'"
    :end-placeholder="item.endPlaceholder ? item.endPlaceholder : '结束日期'"
    @change="change"
  />
</template>

<script>
import mixins from '../mixins'
// type====year/month/date/dates/ week/datetime/datetimerange/daterange/monthrange
export default {
  name: 'MyDatePicker',
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
