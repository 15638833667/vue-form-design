<template>
  <el-switch
    v-model="formData[item.prop]"
    :width="item.width"
    :active-color="item.activeColor"
    :inactive-color="item.inactiveColor"
    :active-value=" item.activeValue"
    :inactive-value="item.inactiveValue"
    :active-text="item.activeText"
    :inactive-text="item.inactiveText"
    :disabled="item.disabled"
    :style="item.style"
    @change="change"
  />
</template>

<script>
import mixins from '../mixins'

export default {
  name: 'MySwitch',
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
