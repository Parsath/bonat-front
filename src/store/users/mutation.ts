import type { UserType } from '../../common/types/user'
import type { UserState } from './index'
export default {
  setUserInArr(state: UserState, payload: UserType[]) {
    console.log('payload')

    console.log(payload)
    state.users = payload
  }
}
