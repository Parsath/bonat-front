<script lang="ts">
export default {
  props: {
    name: String,
    email: String,
    phone: String
  },
  setup() {}
}
</script>

<template>
  <div v-if="name" class="flex flex-col row-span-2 p-4 space-y-5 shadow hover:shadow-xl rounded-xl">
    <div class="flex items-center space-x-2">
      <div class="font-bold">Name</div>
      <div class="">{{ name }}</div>
    </div>
    <div class="flex items-center py-4 space-x-2">
      <div class="font-bold">Email</div>
      <div class="">{{ email }}</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="font-bold">Phone</div>
      <div class="">{{ phone }}</div>
    </div>
  </div>
</template>
