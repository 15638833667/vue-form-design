export default {
  props: {
    item: { type: Object, default: {}},
    formData: {}
  },
  methods: {
    mixinEvent(params) {
      this.$emit('event', params)
    }
  }
}
