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
    const isUserRoute = ref(route.name === 'user')
    const isNotFoundRoute = ref(route.name === 'notFound')

    watch(
      () => route.name,
      (newName) => {
        isUserRoute.value = newName === 'user'
        isNotFoundRoute.value = newName === 'notFound'
      }
    )

    // expose to template and other options API hooks
    return {
      isUserRoute,
      backHome,
      isNotFoundRoute
    }
  }
}
</script>

<template>
  <!-- header needs to only exist if route is valid -->
  <header class="flex items-center justify-between p-8" v-if="!isNotFoundRoute">
    <img
      alt="Vue logo"
      class="cursor-pointer logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
      @click="backHome()"
    />

    <div
      v-if="isUserRoute"
      class="flex space-x-1.5 items-center justify-center hover:bg-orange-600/80 bg-orange-400 text-white rounded-lg"
    >
      <router-link
        to="/"
        class="p-2 text-lg font-bold rounded-lg shadow-sm sm:px-5 xs:text-xl lg:text-2xl"
      >
        Back
      </router-link>
    </div>
  </header>

  <RouterView />
</template>
