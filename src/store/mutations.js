import Vue from "vue";
const mutations = {
  SET_FORM_ITEM: (state, item) => {
    state.formItem = item;
  },
  PUSH_FORM_LIST: (state, item) => {
    state.formList.push(item);
  },
  SET_FORM_CONFIG: (state, item) => {
    state.formConfig = item;
  },
  SET_FORM_LIST_ITEM: (state, {index, item}) => {
    Vue.set(state.formList, index, item)
  },
};
export default mutations;
