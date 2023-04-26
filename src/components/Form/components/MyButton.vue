<template>
  <el-button
    :type="item.type"
    :icon="item.icon"
    :loading="item.loading"
    :size="item.size"
    :round="item.round"
    :disabled="item.disabled"
    :style="item.style"
    :class="item.class"
    :plain="item.plain"
    :circle="item.circle "
    :autofocus="item.autofocus"
    :native-type="item.nativeType"
    @click="click(item.event)"
  >
    {{ item.value }}
  </el-button>
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
    click(event) {
      this.$emit('click', event)
    }
  }
}
</script>
