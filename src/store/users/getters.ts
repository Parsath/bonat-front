import type { UserState } from './index'
export default {
  getUsers(state: UserState) {
    return state.users
  },
  getUser(state: UserState) {
    return state.user
  }
}
