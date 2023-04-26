<template>
  <div class="form-render-box">
    <label
      class="label"
      :style="{
        width: $store.state.formConfig.labelWidth + 'px',
        display:
          $store.state.formConfig.labelStatus === 'row'
            ? 'block'
            : 'inline-block',
      }"
      >{{ item.label }}</label
    >
    <div
      class="form-field"
      :style="{
        width:
          $store.state.formConfig.labelStatus === 'row'
            ? '100%'
            : `calc(100% - ${$store.state.formConfig.labelWidth + 'px'})`,
      }"
    >
      <component
        :is="`My${item.itemType}`"
        :item="item"
        :form-data="formData"
        @event="event"
      />
    </div>
  </div>
</template>

<script>
import MyInput from "./components/MyInput";
import MySelect from "./components/MySelect";
import MyButton from "./components/MyButton";
import MyRadio from "./components/MyRadio";
import MyCheck from "./components/MyCheck";
import MySwitch from "./components/MySwitch";

export default {
  name: "FormIndex",
  components: {
    MyInput,
    MySelect,
    MyButton,
    MyRadio,
    MyCheck,
    MySwitch,
  },
  props: {
    item: {},
    formData: {},
  },
  data() {
    return {};
  },
  computed: {},

  created() {},
  mounted() {},
  methods: {
    event(params) {
      this.$emit("event", { ...params, data: this.formData });
    },
  },
};
</script>
<style lang="scss" scoped>
.form-render-box {
  display: flex;
  align-items: center;
  justify-self: flex-start;
  flex-wrap: wrap;
  border: 1px dashed #ddd;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  .label {
    line-height: 40px;
  }
}
</style>
