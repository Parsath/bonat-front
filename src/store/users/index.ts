import mutations from './mutation'
import actions from './action'
import getters from './getters'
import type { UserType } from '../../common/types/user'

export interface UserState {
  err: any
  users: UserType[]
}

export default {
  namespaced: true,
  state(): UserState {
    return {
      err: undefined,
      users: [] as UserType[]
    }
  },
  mutations,
  actions,
  getters
}
