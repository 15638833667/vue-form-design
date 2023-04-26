<template>
  <el-slider
    v-model="formData[item.prop]"
    :min="item.min"
    :max="item.max"
    :step="item.step"
    :disabled="item.disabled"
    :show-input="item.showInput"
    :show-input-controls="item.showInputControls"
    :show-stops="item.showStops"
    :show-tooltip="item.showTooltip"
    :range="item.range"
    :height="item.height"
    :vertical="item.vertical"
    :marks="item.marks"
    @change="change"
  />
</template>

<script>
import mixins from '../mixins'

export default {
  name: 'MySlider',
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
