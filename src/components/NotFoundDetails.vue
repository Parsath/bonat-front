<script lang="ts">
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const backHome = () => {
      router.push('/')
    }

    return {
      backHome
    }
  }
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-screen space-y-5 font-bold text-orange-300 bg-black 404 text-9xl"
    @click="backHome()"
  >
    <span>404</span>
    <span class="text-4xl font-medium text-[#FF6645]">Click anywhere to go back home</span>
  </div>
</template>
