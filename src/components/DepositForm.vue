<template>
  <div class="">
    <q-select v-model="model.amount" :options="options" label="Choose amount" />
    <q-select v-model="model.currency" :options="options" label="Choose currency" />
    <div class="flex flex-center column q-pa-md">
      <img src="qr.png" alt="">
      <div>FGBfvcnkfdnvkk74365832ybvcvdfvfvb</div>
    </div>
  </div>
  <q-btn color="primary full-width">Copy</q-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useModalComposition from 'stores/modalComposition'

export default defineComponent({
  name: 'DepositForm',
  setup () {
    const store = useModalComposition()
    return {
      model: store.depositModel,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
})
</script>
