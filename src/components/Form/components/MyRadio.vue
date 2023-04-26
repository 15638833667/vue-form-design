<template>
  <el-radio-group
    v-model="formData[item.prop]"
    :size="item.size"
    @change="change"
  >
    <el-radio
      v-for="option in options"
      :key="option.value?option.value:option"
      :label="option.value?option.value:option"
      :border="item.border"
      :style="item.style"
      :disabled="item.disabled"
    >
      {{ option.label ? option.label : option }}
    </el-radio>
  </el-radio-group>
</template>

<script>
import mixins from '../mixins'

export default {
  components: {},
  mixins: [mixins],
  props: {},
  data() {
    return {}
  },
  computed: {
    options() {
      if (this.item.options instanceof Array) {
        return this.item.options
      } else {
        const list = this.item.options.split(',')
        return list.map(item => {
          return { value: item, label: item }
        })
      }
    }
  },
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
