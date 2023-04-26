<template>
  <mks-form
    ref="myForm"
    v-loading="formLoading"
    label-suffix=""
    size="small"
    :form-data="formData"
    :form-cols="formCols"
    :is-inline="false"
    :btns="btns"
    :is-grid-layout="true"
    label-width="80px"
    label-position="right"
    :rules="rules"
    @event="onEvent"
    @submit="submit"
    @reset="cancle"
  />
</template>
<script>
import mksForm from '../../components/Form/index.vue'
export default {
  name: 'ValueInfoForm',
  components: {
    mksForm
  },  
  props: {
    type: {
      type: String,
      default: 'add'
    },
    data: {
      type: Object,
      default: () => {
        return {
          correctValue: '',
          maxValue: '',
          minValue: '',
          ruleCode: '',
          ruleName: '',
          status: '1'
        }
      }
    }
  },
  data() {
    return {
      formData: {
        correctValue: '',
        maxValue: '',
        minValue: '',
        ruleCode: '',
        ruleName: '',
        status: '1'
      },
      formLoading: false,
      formCols: [
        {
          itemType: 'Input',
          placeholder: '请输入',
          label: '规则名称',
          prop: 'ruleName',
          noShow: false,
          span: 24,
          clearable: true
        },
        {
          itemType: 'Input',
          placeholder: '请输入',
          label: '规则编码',
          prop: 'ruleCode',
          noShow: false,
          span: 24,
          clearable: true
        },
        {
          itemType: 'Input',
          placeholder: '请输入',
          label: '最大值',
          maxlength: 30,
          prop: 'maxValue',
          noShow: false,
          span: 24,
          clearable: true
        },
        {
          itemType: 'Input',
          placeholder: '请输入',
          label: '最小值',
          maxlength: 30,
          prop: 'minValue',
          noShow: false,
          span: 24,
          clearable: true
        },
        {
          itemType: 'Input',
          placeholder: '请输入',
          label: '校正值',
          maxlength: 30,
          prop: 'correctValue',
          noShow: false,
          span: 24,
          clearable: true
        },
        {
          itemType: 'Select',
          label: '状态',
          options: [
            { label: '禁用', value: '0' },
            { label: '启用', value: '1' }
          ],
          prop: 'status',
          noShow: true,
          span: 24
        }
      ],
      btns: {
        align: 'center',
        btnList: [
          {
            itemType: 'Button',
            value: '保 存',
            type: 'primary',
            event: 'submit',
            size: 'medium'
          },
          {
            itemType: 'Button',
            value: '取 消',
            type: 'default',
            event: 'reset',
            size: 'medium'
          }
        ]
      },
      rules: {
        correctValue: [
          { required: true, message: '请输入校正值', trigger: 'change' }
        ],
        maxValue: [
          { required: true, message: '请输入最大值', trigger: 'change' }
        ],
        minValue: [
          { required: true, message: '请输入最小值', trigger: 'change' }
        ],
        ruleCode: [
          { required: true, message: '请输入规则编码', trigger: 'change' }
        ],
        ruleName: [
          { required: true, message: '请选择规则名称', trigger: 'change' }
        ]
      }
    }
  },
  watch: {
    type: {
      handler: function(val) {
        this.formCols.at(-1).noShow = val === 'add'
      },
      immediate: true
    },
    data: {
      handler: function(val) {
        const { correctValue, maxValue, minValue, ruleCode, ruleName, status } = val
        this.formData = { correctValue, maxValue, minValue, ruleCode, ruleName, status: String(status) }
      },
      immediate: true,
      deep: true
    }
  },
  created() {},
  methods: {
    //  提交事件
    submit() {
      this.formData.maxValue = Number(this.formData.maxValue)
      this.formData.minValue = Number(this.formData.minValue)
      this.formData.correctValue = Number(this.formData.correctValue)
      this.formLoading = true
      if (this.type === 'update') {
        // 修改
        // this.$set()
        console.log('gengxin')
        this.$set(this.formData, 'id', this.data.id)
        
      } else {
        // 新增
        console.log('xinzeng')
        this.formData.status = 1
        
      }
    },
    cancle() {
      this.$emit('close', false)
      this.formData = {
        correctValue: '',
        maxValue: '',
        minValue: '',
        ruleCode: '',
        ruleName: '',
        status: '1'
      }
    },
    resetForm() {
      this.$emit('close', true)
      this.formData = {
        correctValue: '',
        maxValue: '',
        minValue: '',
        ruleCode: '',
        ruleName: '',
        status: '1'
      }
    },
    onEvent() {}
  }
}
</script>
<style lang="scss" scoped></style>
