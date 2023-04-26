<template>
  <mks-form
    ref="myForm"
    label-suffix=""
    size="small"
    :form-data="formData"
    :form-cols="formCols"
    :is-inline="false"
    :is-grid-layout="true"
    label-width="80px"
    label-position="right"
    @event="onEvent"
  />
</template>
<script>
import mksForm from "../../components/Form/index.vue";
export default {
  name: "ValueInfoForm",
  components: {
    mksForm,
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      formData: {},
      formCols: [],
    };
  },
  watch: {
    data: {
      handler: function (val) {
        val.forEach((item) => {
          this.$set(this.formData, item.prop, "");
        });
        this.formCols = val;
      },
      immediate: true,
      deep: true,
    },
  },
  created() {},
  methods: {
    onEvent() {},
  },
};
</script>
<style lang="scss" scoped></style>
