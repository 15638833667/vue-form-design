<template>
  <el-input
    v-model="formData[item.prop]"
    :style="item.style?item.style:{width:'100%'}"
    :type="item.type"
    :placeholder="item.placeholder"
    :suffix-icon="item.suffixIcon"
    :prefix-icon="item.prefixIcon"
    :show-password="item.showPassword"
    :maxlength="item.maxlength"
    :rows="item.rows"
    :autosize="item.autosize"
    :minlength="item.minlength"
    :show-word-limit="item.showWordLimit"
    :disabled="item.disabled"
    :clearable="item.clearable"
    @change="change"
  />
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
