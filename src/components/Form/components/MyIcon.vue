<template>
  <i v-if="item.elementUi" :class="item.class" />
  <span v-else class="svg-container"><svg-icon :icon-class="item.class" /></span>
</template>

<script>
import mixins from '../mixins'

export default {
  name: 'MyIcon',
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
