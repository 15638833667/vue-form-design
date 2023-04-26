
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
};
export default mutations