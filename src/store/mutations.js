import Vue from "vue";
const mutations = {
  SET_FORM_ITEM: (state, item) => {
    state.formItem = item;
  },
  SET_FORM_LIST: (state, val) => {
    state.formList = val;
  },
  PUSH_FORM_LIST: (state, item) => {
    state.formList.push(item);
  },
  SET_FORM_CONFIG: (state, item) => {
    state.formConfig = item;
  },
  SET_FORM_LIST_ITEM: (state, { index, item }) => {
    Vue.set(state.formList, index, item);
  },
  SORT_FORM_LIST_ITEM: (state, start, num, item = null) => {
    state.formList.splice(start, num, item);
  },
};
export default mutations;
