<template>
  <div class="">
    <q-select v-model="model1" :options="options" label="Choose amount" />
    <q-select v-model="model2" :options="options" label="Choose currency" />
    <div class="flex flex-center column q-pa-md">
      <img src="qr.png" alt="">
      <div>FGBfvcnkfdnvkk74365832ybvcvdfvfvb</div>
    </div>
  </div>
  <q-btn color="primary full-width">Copy</q-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DepositForm',
  setup () {
    return {
      model1: ref(null),
      model2: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
})
</script>
