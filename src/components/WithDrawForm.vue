<template>
  <div class="q-mb-md">
    <q-select v-model="model.exchange" :options="options" label="Choose exchange" />
    <q-select v-model="model.currency" :options="options" label="Choose currency" />
    <q-input v-model="model.amount" label="Withdraw amount">
      <template v-slot:append>
        <q-badge color="blue-grey-3 q-pa-sm">
          max
        </q-badge>
      </template>
    </q-input>
  </div>
  <q-btn color="primary full-width">Copy</q-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useModalComposition from "stores/modalComposition";

export default defineComponent({
  name: 'WithDrawForm',
  setup () {
    const store = useModalComposition()
    return {
      model: store.withdrawModel,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
})
</script>
