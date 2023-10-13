<script lang="ts">
export default {
  props: {
    street: String,
    suite: String,
    city: String,
    zipcode: String
  },
  setup() {}
}
</script>

<template>
  <div v-if="street" class="flex flex-col p-4 space-y-3 shadow hover:shadow-xl rounded-xl">
    <div class="flex items-center space-x-2">
      <div class="font-bold">Street</div>
      <div class="">{{ street }}</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="font-bold">Suite</div>
      <div class="">{{ suite }}</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="font-bold">City</div>
      <div class="">{{ city }}</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="font-bold">Zip Code</div>
      <div class="">{{ zipcode }}</div>
    </div>
  </div>
</template>
