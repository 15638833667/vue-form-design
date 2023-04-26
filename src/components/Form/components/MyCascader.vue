<!--
 * @Author: qiaoqiao
 * @Date: 2021-10-22 13:15:34
 * @LastEditTime: 2021-11-15 15:07:12
 * @Description:
-->
<template>
  <el-cascader
    v-model="formData[item.prop]"
    :placeholder="item.placeholder"
    :style="item.style?item.style:{width:'100%'}"
    :class="item.class"
    :options="cascaderOptions"
    :disabled="item.disabled"
    :show-all-levels="item.showAllLevels"
    :separator="item.separator"
    :collapse-tags="item.collapseTags"
    :props="item.props"
    :filterable="item.filterable"
    :debounce="item.debounce"
    :filter-method="item.filterMethod"
    :clearable="item.clearable"
    @change="change"
  />
</template>

<script>
import mixins from '../mixins'
import request from '@/utils/http/request'
export default {
  name: 'MyCascader',
  components: {},
  mixins: [mixins],
  props: {},
  data() {
    return {
      cascaderOptions: []
    }
  },
  computed: {
    options() {
      if (this.item.options instanceof Array) {
        return this.item.options
      } else {
        const list = this.item.options.split(',')
        return list.map(item => {
          return { value: item, label: item }
        })
      }
    }
  },
  created() {},
  mounted() {
    if (this.item.type === 'remote') {
      this.loadRemoteData()
    } else {
      this.loadLocalData(this.options)
    }
  },
  methods: {
    change() {
      this.mixinEvent({
        type: 'change',
        prop: this.item.prop,
        value: this.formData[this.item.prop]
      })
    },
    loadLocalData(data) {
      this.cascaderOptions = data
    },
    loadRemoteData() {
      this.getRequestData().then(response => {
        if (response.code === 200) {
          this.cascaderOptions = response.data.list
        }
      })
    },
    getRequestData() {
      const { url, method, params } = this.item || {}
      if (method && method.toLowerCase() === 'get') {
        return request({
          url: url,
          method: 'get',
          params
        })
      } else {
        return request({
          url: url,
          method: 'post',
          data: params
        })
      }
    }
  }
}
</script>
