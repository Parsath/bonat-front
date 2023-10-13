<script lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()

    const backHome = () => {
      router.push('/')
    }

    // expose to template and other options API hooks
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
