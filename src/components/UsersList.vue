<script lang="ts">
import { onMounted, computed, ref, onUpdated } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const searchInput = ref('') // Initializing a ref for the search input

    const navigateToUser = (userId: number) => {
      router.push({ name: 'user', params: { id: userId } })
    }

    const filteredUsers = computed(() => {
      if (!searchInput.value) {
        return store.getters['user/getUsers']
      } else {
        const searchTerm = searchInput.value.toLowerCase()
        return store.getters['user/getUsers'].filter(
          (user: any) =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.address.city.toLowerCase().includes(searchTerm)
        )
      }
    })

    onMounted(async () => {
      await store.dispatch('user/getUsers')
    })

    return {
      users: filteredUsers,
      navigateToUser,
      searchInput
    }
  }
}
</script>

<template>
  <div class="p-4 mb-5 bg-white">
    <div class="flex items-center justify-between w-full">
      <div class="text-2xl font-semibold">User list</div>
      <label
        for="search"
        class="relative w-1/2 border border-orange-200 rounded-lg sm:w-1/3 focus:ring-orange-300 focus:outline-orange-300 focus:border-red-300"
      >
        <img
          src="@/assets/search.svg"
          class="absolute w-5 h-5 -translate-y-1/2 left-3 top-1/2"
          alt="search-icon"
        />
        <input
          type="text"
          class="w-full p-4 px-5 rounded-lg shadow-sm indent-6 sm:indent-10 focus:ring-orange-300 focus:outline-orange-300 focus:border-red-300"
          placeholder="Search user"
          v-model="searchInput"
        />
      </label>
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full" v-if="users.length > 0" aria-label="List of users">
        <thead>
          <tr class="flex items-center justify-between w-full p-5 py-6 space-x-5 min-w-max">
            <th class="text-lg font-bold sm:px-5 xs:text-xl lg:text-2xl">Name</th>
            <th class="text-lg font-bold sm:px-5 xs:text-xl lg:text-2xl">Email</th>
            <th class="text-lg font-bold sm:px-5 xs:text-xl lg:text-2xl">City</th>
          </tr>
        </thead>
        <tbody
          class="flex flex-col w-full h-full border border-orange-200 shadow-lg bg-slate-200 rounded-xl"
        >
          <tr
            v-for="(user, index) in users"
            :key="user.id"
            :class="[
              'flex items-center justify-between space-x-5  min-w-max w-full p-5 py-6 hover:bg-slate-300/80 cursor-pointer  ',
              {
                'rounded-t-xl': index === 0,
                'rounded-b-xl': index === users.length - 1,
                'border-b border-slate-400': index !== users.length - 1
              }
            ]"
            @click="navigateToUser(user.id)"
          >
            <td class="px-5 font-medium xs:text-lg lg:text-xl whitespace-nowrap w-max">
              {{ user.name }}
            </td>
            <td class="px-5 xs:text-lg lg:text-xl whitespace-nowrap w-max">
              {{ user.email }}
            </td>
            <td class="px-5 xs:text-lg lg:text-xl whitespace-nowrap w-max">
              {{ user.address.city }}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-else
        class="flex items-center justify-start w-full h-full mt-20 text-xl font-semibold text-center text-black sm:text-2xl p"
      >
        No users found :(
      </div>
    </div>
  </div>
</template>
