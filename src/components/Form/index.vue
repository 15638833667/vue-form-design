<template>
  <div class="form-render-box">
    <label class="label">{{ item.label }}</label>
    <div class="form-field">
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
  justify-content: flex-start;
  align-items: center;
  border: 1px dashed #ddd;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  .label {
    width: 150px;
  }
  .form-field {
    width: calc(100% - 150px);
  }
}
</style>
