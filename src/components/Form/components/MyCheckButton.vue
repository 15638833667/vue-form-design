<template>
  <el-checkbox-group
    v-model="formData[item.prop]"
    :min="item.min"
    :max="item.max"
  >
    <el-checkbox-button
      v-for="option in options"
      :key="option.value ? option.value : option"
      :label="option.value ? option.value : option"
      :disabled="item.disabled"
      :style="item.style"
      @change="change"
    >
      {{ option.label ? option.label : option }}
    </el-checkbox-button>
  </el-checkbox-group>
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
  created() {
    if (!this.formData[this.item.prop]) {
      this.$set(this.formData, this.item.prop, [])
    }
  },
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
