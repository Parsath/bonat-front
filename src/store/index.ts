import { createStore } from 'vuex'

import user from './users/index'
import type { UserState } from './users/index'

const store = createStore({
  modules: {
    user: user
  },

  state() {
    return {
      err: {
        code: '',
        message: ''
      },
      users: []
    }
  },

  getters: {
    getError(state: UserState) {
      return state.err
    }
  },
  mutations: {
    createError(state: UserState, { errorObject }: any) {
      state.err = { ...errorObject }
    },

    resetError(state: UserState, { err }: any) {
      state.err = err
    }
  },
  actions: {}
})

export default store
