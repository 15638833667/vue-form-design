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
    label: "输入框",
    showWordLimit: true,
    maxlength: 30,
    prop: "correctValue",
    noShow: false,
  },
  radio: {
    itemType: "Radio",
    label: "Radio",
    options: ["北京", "上海", "广州", "松江"],
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
    options: ["北京", "上海", "广州", "松江"],
    prop: "checkBoxData",
  },
  select: {
    itemType: "Select",
    label: "Address",
    options: ["北京", "上海", "广州", "松江"],
    prop: "status",
  },
};
export default componentsMap;
