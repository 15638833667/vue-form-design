const componentsMap = {
  button: {
    itemType: "Button",
    value: "保 存",
    type: "primary",
    event: "submit",
    size: "medium",
  },
  input: {
    itemType: "Input",
    placeholder: "请输入",
    label: "校正值",
    maxlength: 30,
    prop: "correctValue",
    noShow: false,
  },
  radio: {
    itemType: "Radio",
    label: "网关类型",
    options: [
      { label: "实体网关", value: 1 },
      { label: "虚拟网关", value: 2 },
    ],
    prop: "status",
  },
  switch: {
    itemType: "Switch",
    label: "开关",
    prop: "switchData",
  },
  checkbox: {
    itemType: "Check",
    label: "CheckBox",
    // options: [{label: "双皮奶", value: "0"}, {label: "龙须面", value: "1"}],
    options: "双皮奶,龙须面",
    prop: "checkBoxData",
  },
  select: {
    itemType: "Select",
    label: "状态",
    options: [
      { label: "禁用", value: "0" },
      { label: "启用", value: "1" },
    ],
    prop: "status",
  },
};
export default componentsMap;
