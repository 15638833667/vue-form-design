<!--
 * @Author: qiaoqiao
 * @Date: 2021-10-22 13:15:34
 * @LastEditTime: 2021-11-15 13:00:20
 * @Description: 
-->
# MksForm API 文档

| MyForm 基于 element-ui form 表单进行了二次封装

## MksForm 属性

| 参数 | 说明 |  类型   | 可选值 | 默认值 |
| ----| ---- | :-----: | ----| :----: |
| model          | 表单数据对象                                                                            | object  |
| label-suffix   | 表单域标签的后缀                                                                        | string  | ---                   |  ---   |
| status-icon    | 是否在输入框中显示校验结果反馈图标                                                      | boolean | ----                  | false  |
| size           | 用于控制该表单内组件的尺寸                                                              | string  | medium / small / mini |   --   |
| disabled       | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效       | boolean | --                    | false  |
| inline         | 行内表单模式                                                                            | boolean | --                    | false  |
| label-width    | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。 | string  | --                    |   --   |
| label-position | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width                   | string  | right/left/top        | right  |
| rules          | 表单验证规则                                                                            | object  | --                    |   --   |

详情见https://element.eleme.io/#/zh-CN/component/form#form-attributes

### 布局

| 参数 | 说明 |  类型  | 可选值 |      默认值       |
| -----| -----| :----: | ------ | :---------: |
| isGridLayout  | 是否需要栅格布局 | boolean | -- true/false    |       false         |
| formItems  | 表单初始化数据 | Array | --[]    |       []         |

- isGridLayout 为false时，formItems需要传入

### el-row 属性

| 参数 | 说明 |  类型  | 可选值 |      默认值       |
| -----| -----| :----: | ------ | :---------: |
| gutter   | 栅格间隔                        | number | --     |         0         |
| formCols | 表单初始化数据 | Array  | --     | [ ] |

- isGridLayout 为true时，formCols需要传入

### el-col el-form-item 属性

| 参数 | 说明  |  类型   | 可选值 | 默认值 |
| -----| ----- | :-----: | -------| :----: |
| span        | 栅格占据的列数                                                               | number  | --                              |   24   |
| noShow      | 代表是否展示                                                                 | boolean | --                              |  true  |
| offset      | 栅格左侧的间隔格数                                                           | number  | --                              |   0    |
| eType       | 代表类型                                                                     | string  | --                              |   --   |
| label       | 标签文本                                                                     | string  | --                              |   --   |
| prop        | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string  | 传入 Form 组件的 model 中的字段 |   --   |
| label-width | 表单域标签的的宽度，例如 '50px'。支持 auto。                                 | string  | --                              |   --   |
| formData    | 表单初始化数据                                                               |  Array  | --                              |   []   |

### slot 插槽

| 插槽名 | 说明 | 类型   | 可选值 | 默认值 |
| ------ | -----| ------ | ------ | ------ |
| name   | 自定义插槽名，根据自己需要，放置不同组件 | string | --     |

### event

| 参数 | 说明 |  类型  | 可选值 |      默认值       |
| -----| -----| :----: | ------ | :---------: |
| btns  | 操作按钮列表 | Object | --{}    |       {}         |

#### btns
|  align  | 操作按钮布局 | String | --left/right/center    |       center         |
|  btnList  | 操作按钮列表 | Array | --[]    |       []         |

button 属性 [详情参考] https://element.eleme.cn/#/zh-CN/component/button#attributes

- 按钮事件 event
- 1 event：submit 表示提交事件会校验 rule
- 2 event：reset 表示清空数据还原初始值

### 每一项表单属性

[详情参考] https://element.eleme.io/#/zh-CN/component/layout

```其中 checkbox radio select 添加 options 属性 option 可以为 以下三种形式
 options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
 options: '手机,电脑',
 options: ['手机', '电脑'],
```

### select  cascader 说明

| 参数 | 说明 |  类型  | 可选值 |      默认值       |
| type | 获取数据的方式 |  String  | remote/local |      remote       |
| url | 请求地址 |  String  |  --   |     --      |
