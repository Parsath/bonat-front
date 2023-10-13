<script lang="ts">
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('user/getUsers')
    })

    return {
      users: computed(() => store.getters['user/getUsers'])
    }
  }
}
</script>

<template>
  <div class="min-h-screen p-4 bg-white">
    <div class="w-full h-full shadow-lg bg-slate-200 rounded-xl">
      <div v-for="user in users" :key="user.id" class="">
        <div class="flex items-center justify-between p-4 border-b border-blue-300">
          <div class="flex items-center">
            <img class="w-12 h-12 rounded-full" :src="user.avatar" :alt="user.name" />
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-blue-900">
                {{ user.name }}
              </h4>
              <p class="text-sm text-blue-600">{{ user.email }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <button class="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg">
              Edit
            </button>
            <button class="px-4 py-2 ml-4 text-sm font-semibold text-white bg-red-600 rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
