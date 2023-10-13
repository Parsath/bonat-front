import axios from 'axios'
export default {
  async getUsers(context: any, payload: any) {
    try {
      const userArr = await axios.get('https://jsonplaceholder.typicode.com/users')
      context.commit('setUserInArr', userArr.data)
    } catch (err) {
      console.log(err)
    }
  }
}
