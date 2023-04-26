<template>
  <component
    :is="`My${item.itemType}`"
    :item="item"
    :form-data="formData"
    @event="event"
  />
</template>

<script>
import MyInput from './MyInput'
import MyInputNumber from './MyInputNumber'
import MySelect from './MySelect'
import MyButton from './MyButton'
import MyRadio from './MyRadio'
import MyRadioButton from './MyRadioButton'
import MyCheck from './MyCheck'
import MyCheckButton from './MyCheckButton'
import MyDatePicker from './MyDatePicker'
import MyTimePicker from './MyTimePicker'
import MySwitch from './MySwitch'
import MySlider from './MySlider'
import MySpan from './MySpan'
import MyRate from './MyRate'
import MyIcon from './MyIcon'
import MyCascader from './MyCascader'
import MyColorPicker from './MyColorPicker'
import MyTreeSelect from './MyTreeSelect'

export default {
  name: 'Index',
  components: {
    MyInput,
    MyInputNumber,
    MySelect,
    MyButton,
    MyRadio,
    MyRadioButton,
    MyCheck,
    MyCheckButton,
    MyDatePicker,
    MyTimePicker,
    MySwitch,
    MySlider,
    MySpan,
    MyRate,
    MyIcon,
    MyCascader,
    MyColorPicker,
    MyTreeSelect
  },
  props: {
    item: {},
    formData: {}
  },
  data() {
    return {}
  },
  computed: {},

  created() {
  },
  mounted() {
  },
  methods: {
    event(params) {
      this.$emit('event', { ...params, data: this.formData })
    }
  }
}
</script>
