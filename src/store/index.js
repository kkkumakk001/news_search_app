import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: 'Vuex'
  },
  mutations: {
    changeKeyword(state, keyword) {
      state.keyword = keyword
    }
  },
  actions: {
    changeKeyword({commit}, keyword) {
      commit('changeKeyword', keyword)
    }
  },
  modules: {
  }
})
