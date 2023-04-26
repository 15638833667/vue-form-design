<template>
  <span :class="item.class" :style="item.style">
    {{ item.formatter && item.formatter(formData[item.prop]) || formData[item.prop] }}
  </span>
</template>

<script>
import mixins from '../mixins'

export default {
  name: 'MySpan',
  components: {},
  mixins: [mixins],
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

