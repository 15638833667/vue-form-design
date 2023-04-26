<template>
  <el-rate
    v-model="formData[item.prop]"
    :colors="item.colors"
    :void-color="item.voidColor"
    :disabled-void-color="item.disabledVoidColor"
    :disabled-void-icon-class="item.disabledVoidIconClass"
    :max="item.max"
    :disabled="item.disabled"
    :class="item.class"
    :icon-classes="item.iconClasses"
    :void-icon-class="item.voidIconClass"
    :allow-half="item.allowHalf"
    :style="item.style"
    :texts="item.texts"
    :show-text="item.showText"
    :low-threshold="item.lowThreshold"
    @change="change"
  />
</template>

<script>
import mixins from '../mixins'

export default {
  name: 'MyRate',
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
