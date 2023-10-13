import mutations from './mutation'
import actions from './action'
import getters from './getters'
import type { UserType } from '../../common/types/user'

export interface UserState {
  err: any
  users: UserType[]
  user: UserType | undefined
}

export default {
  namespaced: true,
  state(): UserState {
    return {
      err: undefined,
      users: [] as UserType[],
      user: undefined
    }
  },
  mutations,
  actions,
  getters
}
