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
    options: [
      { label: "北京", value: 1 },
      { label: "上海", value: 2 },
      { label: "广州", value: 3 },
      { label: "松江", value: 4 },
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
    options: [
      { label: "北京", value: 1 },
      { label: "上海", value: 2 },
      { label: "广州", value: 3 },
      { label: "松江", value: 4 },
    ],
    prop: "checkBoxData",
  },
  select: {
    itemType: "Select",
    label: "Address",
    options: [
      { label: "北京", value: 1 },
      { label: "上海", value: 2 },
      { label: "广州", value: 3 },
      { label: "松江", value: 4 },
    ],
    prop: "status",
  },
};
export default componentsMap;
