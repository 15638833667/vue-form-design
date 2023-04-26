
const mutations = {
  SET_FORM_ITEM: (state, item) => {
    state.formItem = item;
  },
  PUSH_FORM_LIST: (state, item) => {
    state.formList.push(item);
  },
};
export default mutations