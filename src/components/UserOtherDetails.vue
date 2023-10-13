<script lang="ts">
import { defineProps, onUpdated } from 'vue'

export default {
  props: {
    website: String,
    companyName: String
  },
  setup() {}
}
</script>

<template>
  <div v-if="website" class="flex flex-col p-4 space-y-3 shadow hover:shadow-xl rounded-xl">
    <div class="flex items-center space-x-2">
      <a class="font-bold">Website</a>
      <a target="_blank" noreferer :href="website" class="font-medium text-cyan-400">{{
        website
      }}</a>
    </div>
    <div class="flex items-center space-x-2">
      <div class="font-bold">Company name</div>
      <div class="">{{ companyName }}</div>
    </div>
  </div>
</template>
