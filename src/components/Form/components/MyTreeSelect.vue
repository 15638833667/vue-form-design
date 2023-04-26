<!--
 * @Author: qiaoqiao
 * @Date: 2021-10-22 13:15:34
 * @LastEditTime: 2021-11-15 15:45:16
 * @Description:
-->
<template>
  <treeselect
    :value="formData[item.prop]"
    :multiple="item.multiple"
    :placeholder="item.placeholder"
    :normalizer="item.normalizer"
    :clearable="item.clearable"
    :disabled="item.disabled"
    :limit="item.limit"
    :flatten-search-results="item.searchResults"
    :options="selectOptions"
    :style="item.style?item.style:{width:'202px'}"
    @input="change"
  />
</template>

<script>
import mixins from '../mixins'
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import request from '@/utils/http/request'
export default {
  name: 'MyTreeSelect',
  components: {
    Treeselect
  },
  mixins: [mixins],
  props: {},
  data() {
    return {
      selectOptions: []
    }
  },
  computed: {
    options() {
      if (this.item.options instanceof Array) {
        return this.item.options
      } else {
        const list = this.item.options.split(',')
        return list.map(item => {
          return { id: item, label: item }
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
    change(node, instanceId) {
      console.log(node)
      this.mixinEvent({
        type: 'change',
        prop: this.item.prop,
        value: node
      })
    },
    loadLocalData(data) {
      this.selectOptions = data
    },
    loadRemoteData() {
      this.getRequestData().then(response => {
        if (response.code === 200) {
          if (response.data) {
            this.selectOptions = response.data.list || response.data
          }
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
