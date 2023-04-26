<template>
  <el-form
    ref="mksForm"
    :model="formData"
    :label-suffix="labelSuffix"
    :status-icon="statusIcon"
    :size="size"
    :disabled="disabled"
    :inline="isInline"
    :label-width="labelWidth"
    :label-position="labelPosition"
    :rules="rules"
  >
    <template v-if="isGridLayout">
      <el-row :gutter="gutter?gutter:0">
        <template v-for="item in formCols">
          <el-col
            v-if="!item.noShow"
            :key="item.prop"
            :span="item.span"
            :offset="item.offset"
            @click.native="formItemClick(item)"
            @dblclick.native="formItemDbClick(item)"
          >
            <el-form-item
              :label="item.noFormItem?'':item.label"
              :prop="item.prop"
              :label-width="item.noFormItem?'0':item.labelWidth"
            >
              <slot v-if="item.itemType==='slot'" :name="item.slotName" :data="{...item,...formData}" />
              <my-element v-else :item="item" :form-data="formData" @event="event" />
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <div v-if="btns&&btns.btnList&&btns.btnList.length>0" :style="'text-align:'+btns.align">
        <my-button v-for="(item,index) in btns.btnList" :key="index" :item="item" @click="btnClick" />
      </div>
      <slot name="fromBtns" />
    </template>
    <template v-else>
      <template v-for="(item,index) in formItems">
        <el-form-item
          v-if="!item.noShow"
          :key="index"
          :label="item.noFormItem?'':item.label"
          :prop="item.prop"
          :label-width="item.noFormItem?'0':item.labelWidth"
        >
          <slot v-if="item.itemType==='slot'" :name="item.slotName" :data="{...item,...formData}" />
          <my-element v-else :item="item" :form-data="formData" @event="event" />
        </el-form-item>
      </template>
      <el-form-item v-if="btns&&btns.btnList&&btns.btnList.length>0" :style="'text-align:'+btns.align">
        <my-button v-for="(item,index) in btns.btnList" :key="index" :item="item" @click="btnClick" />
        <slot name="fromBtns" />
      </el-form-item>
    </template>
  </el-form>
</template>

<script>

import MyElement from './components'
import MyButton from './components/MyButton.vue'
import { Message } from 'element-ui'

export default {
  name: 'MksForm',
  components: {
    MyElement,
    MyButton
  },
  props: {
    isGridLayout: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    needToast: { type: Boolean, default: false },
    labelPosition: { type: String, default: 'right' },
    formData: { type: Object, default: null },
    rules: { type: Object, default: null },
    formCols: { type: Array, default: () => [] },
    formItems: { type: Array, default: () => [] },
    btns: { type: Object, default: () => {} },
    gutter: { type: Number, default: 0 },
    isInline: { type: Boolean, default: false },
    statusIcon: { type: Boolean, default: false },
    size: { type: String, default: 'medium' },
    labelSuffix: { type: String, default: '：' },
    labelWidth: { type: String, default: '120px' }
  },
  watch: {
    formCols: {
      handler() {
        this.formCols.forEach(item => {
          if (item.noShow) { // 设置该item是否展示
            if (item.itemType === 'Check' || item.itemType === 'CheckButton') {
              this.formData[item.prop] = []
            } else {
              delete this.formData[item.prop]
            }
          }
        })
      },
      deep: true
    },
    formItems: {
      handler() {
        this.formItems.forEach(item => {
          if (item.noShow) { // 设置该item是否展示
            if (item.itemType === 'Check' || item.itemType === 'CheckButton') {
              this.formData[item.prop] = []
            } else {
              delete this.formData[item.prop]
            }
          }
        })
      },
      deep: true
    }
  },
  methods: {
    // 提交校验
    submit() {
      return new Promise((resolve) => {
        this.$refs['mksForm'].validate((valid, message) => {
          if (valid) { resolve(valid) } else if (this.needToast) {
            Message({
              type: 'error',
              message: message[Object.keys(message)[0]][0].message ? message[Object.keys(message)[0]][0].message : '校验失败'
            })
          }
        })
      })
    },
    // 重置
    reset() {
      this.$refs['mksForm'].resetFields()
      this.formCols.forEach(item => {
        if (item.itemType === 'Check' || item.itemType === 'CheckButton') {
          this.formData[item.prop].length = 0
        } else {
          delete this.formData[item.prop]
        }
      })
    },
    formItemClick(item) {
      this.$emit('formItemClick', item)
    },
    formItemDbClick(item) {
      this.$emit('formItemDbClick', item)
    },
    // 所有change以及click事件
    event(params) {
      this.$emit('event', params)
      console.log('event', JSON.stringify(params))
    },
    btnClick(event) {
      if (event === 'submit') {
        this.submit().then(() => {
          this.$emit('submit')
        })
      } else if (event === 'reset') {
        this.reset()
        this.$emit('reset')
      } else {
        this.$emit(event)
      }
    },
    // 设置是否展示
    setNoShow(prop, value) {
      this.setNewValue(prop, 'noShow', value)
    },
    // 设置radio checkbox options值
    setOptions(prop, value) {
      this.setNewValue(prop, 'options', value)
    },
    /**
     * 改变二维数组中某个值
     * @param prop        数组中唯一标识值
     * @param key         需要修改的字段
     * @param value        需要修改的值
     */
    setNewValue(prop, key, value) {
      if (this.isGridLayout) {
        const iIndex = this.formCols.findIndex(iItem => {
          return iItem.prop === prop
        })
        if (iIndex === -1) {
          console.log('找不到要设置的字段')
          return
        }
        this.$set(this.formCols[iIndex], key, value)
      } else {
        const iIndex = this.formItems.findIndex(iItem => {
          return iItem.prop === prop
        })
        if (iIndex === -1) {
          console.log('找不到要设置的字段')
          return
        }
        this.$set(this.formItems[iIndex], key, value)
      }
    }
  }
}
</script>

<style>
.chosen {
  background-color: #eaffea !important;
}
</style>
