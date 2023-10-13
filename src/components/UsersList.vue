<script lang="ts">
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const navigateToUser = (userId: number) => {
      router.push({ name: 'user', params: { id: userId } })
    }

    onMounted(async () => {
      await store.dispatch('user/getUsers')
    })

    return {
      users: computed(() => store.getters['user/getUsers']),
      navigateToUser
    }
  }
}
</script>

<template>
  <div class="p-4 mb-5 bg-white">
    <div class="w-full overflow-x-auto">
      <table class="w-full" aria-label="List of users">
        <thead>
          <tr class="flex items-center justify-between w-full p-5 py-6 space-x-5 min-w-max">
            <th class="text-lg font-bold sm:px-5 xs:text-xl lg:text-2xl">Name</th>
            <th class="text-lg font-bold sm:px-5 xs:text-xl lg:text-2xl">Email</th>
            <th class="text-lg font-bold sm:px-5 xs:text-xl lg:text-2xl">City</th>
          </tr>
        </thead>
        <!-- <thead
        class="flex items-center justify-between w-full p-5 py-6 overflow-x-auto hover:bg-slate-300/80"
      >
        <td class="text-lg font-bold sm:px-5 xs:text-xl lg:text-2xl">Name</td>
        <td class="text-lg font-bold sm:px-5 xs:text-xl lg:text-2xl">Email</td>
        <td class="text-lg font-bold sm:px-5 xs:text-xl lg:text-2xl">City</td>
      </thead> -->
        <tbody class="flex flex-col w-full h-full shadow-lg bg-slate-200 rounded-xl">
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
    </div>
  </div>
</template>
