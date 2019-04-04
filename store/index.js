import Vuex from 'vuex'

//vuexつかってストアを定義。くろーじゃーっぽく書いてるのは多分外部要因でデータを書き換えさせないため？同一データを参照するためかもしれん(呼ばれるたびに新しくnewサレルノ防いでる？)
const appStore = () => {
  return new Vuex.Store({
    state: {
      breed_list: {},
    },
    mutations: {
      breed_list_update(state, payload) {
        state.breed_list = {...payload}
      },
    }
  })
};

export default appStore;
