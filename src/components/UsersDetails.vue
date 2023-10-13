<script lang="ts">
import { onMounted, computed, watch, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import UserPersonalDetails from './UserPersonalDetails.vue'
import UserAddressDetails from './UserAddressDetails.vue'
import UserOtherDetails from './UserOtherDetails.vue'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    onMounted(async () => {
      await store.dispatch('user/getUser', { id: route.params.id })
    })
    watch(
      () => route.params.id,
      async (newId) => {
        await store.dispatch('user/getUser', { id: newId })
      }
    )
    return {
      user: computed(() => store.getters['user/getUser']),
      error: computed(() => store.getters['user/getError'])
    }
  },
  components: { UserPersonalDetails, UserAddressDetails, UserOtherDetails }
}
</script>

<template>
  <div class="p-4 mb-5 bg-white">
    <!-- add back button -->
    <div
      v-if="!user?.name && error"
      class="flex items-center justify-start w-full h-full max-w-5xl mt-20 text-xl font-semibold text-left text-black sm:text-2xl"
    >
      Ooops 😨! It seems like the user you're trying to find does not exist!
    </div>
    <div v-if="!user?.name && !error" class="flex items-center justify-start">
      <img src="@/assets/circle-notch.svg" class="w-10 h-10 animate-spin" />
    </div>
    <div v-else-if="!!user && !!user?.name" class="grid grid-rows-2 gap-6 p-6 md:grid-cols-2">
      <UserPersonalDetails :name="user?.name" :email="user?.email" :phone="user?.phone" />
      <UserAddressDetails
        :street="user?.address?.street"
        :suite="user?.address?.suite"
        :city="user?.address?.city"
        :zipcode="user?.address?.zipcode"
      />
      <UserOtherDetails :website="user?.website" :companyName="user?.company?.name" />
    </div>
  </div>
</template>
