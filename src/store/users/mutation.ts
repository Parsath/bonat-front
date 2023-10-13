import type { UserType } from '../../common/types/user'
import type { UserState } from './index'
export default {
  setUserInArr(state: UserState, payload: UserType[]) {
    state.users = payload
  },
  setUser(state: UserState, payload: UserType) {
    state.user = payload
  },
  setError(state: UserState, payload: any) {
    state.err = payload
  }
}
