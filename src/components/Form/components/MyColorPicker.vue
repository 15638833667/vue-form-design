<template>
  <el-color-picker
    v-model="formData[item.prop]"
    :disabled="item.disabled"
    :size="item.size"
    :color-format="item.colorFormat"
    :predefine="item.predefine"
    :show-alpha="item.showAlpha"
    @change="change"
  />
</template>

<script>
import mixins from '../mixins'

export default {
  name: 'MyColorPicker',
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
