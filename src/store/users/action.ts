import axios from 'axios'
export default {
  async getUsers(context: any, payload: any) {
    try {
      const userArr = await axios.get('https://jsonplaceholder.typicode.com/users')
      context.commit('setUserInArr', userArr.data)
    } catch (err) {
      console.log(err)
    }
  },
  async getUser(context: any, payload: any) {
    try {
      const userArr = await axios.get('https://jsonplaceholder.typicode.com/users/' + payload.id)
      context.commit('setUser', userArr.data)
    } catch (err) {
      console.log(err)
    }
  }
}
