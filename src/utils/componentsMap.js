const componentsMap = {
  // button: {
  //   itemType: "Button",
  //   value: "保 存",
  //   type: "primary",
  //   event: "submit",
  //   size: "medium",
  // },
  input: {
    itemType: "Input",
    placeholder: "请输入",
    label: "输入框",
    showWordLimit: true,
    maxlength: 30,
    prop: "",
    noShow: false,
  },
  radio: {
    itemType: "Radio",
    label: "Radio",
    options: ["北京", "上海", "广州", "松江"],
    prop: "",
  },
  switch: {
    itemType: "Switch",
    label: "开关",
    prop: "",
  },
  checkbox: {
    itemType: "Check",
    label: "CheckBox",
    options: ["北京", "上海", "广州", "松江"],
    prop: "",
  },
  select: {
    itemType: "Select",
    label: "Address",
    options: ["北京", "上海", "广州", "松江"],
    prop: "",
  },
};
export default componentsMap;
