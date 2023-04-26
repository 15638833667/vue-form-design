<!--
 * @Author: qiaoqiao
 * @Date: 2021-10-22 13:15:34
 * @LastEditTime: 2021-11-15 13:24:50
 * @Description:
-->
<template>
  <el-input-number
    v-model="formData[item.prop]"
    :disabled="item.disabled"
    :controls-position="item.controlsPosition"
    :style="item.style?item.style:{width:'100%'}"
    :class="item.class"
    :min="item.min"
    :max="item.max"
    :step="item.step"
    :step-strictly="item.stepStrictly"
    :precision="item.precision"
    :controls="item.controls"
    :placeholder="item.placeholder"
    @change="change"
    @blur="blur"
    @focus="focus"
  />
</template>

<script>
import mixins from '../mixins'

export default {
  name: 'MyInputNumber',
  components: {},
  mixins: [mixins],
  props: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  created() {
    if (!this.formData[this.item.prop]) {
      this.$set(this.formData, this.item.prop, 1)
    }
  },
  methods: {
    change() {
      this.mixinEvent({
        type: 'change',
        prop: this.item.prop,
        value: this.formData[this.item.prop]
      })
    },
    blur() {
      this.mixinEvent({
        type: 'blur',
        prop: this.item.prop,
        value: this.formData[this.item.prop]
      })
    },
    focus() {
      this.mixinEvent({
        type: 'focus',
        prop: this.item.prop,
        value: this.formData[this.item.prop]
      })
    }
  }
}
</script>
