<template>
  <div class="">
    <q-select v-model="model1" :options="options" label="Choose exchange" />
    <q-select v-model="model2" :options="options" label="Choose currency" />
    <q-input v-model="model3" label="Withdraw amount">
      <template v-slot:append>
        <div class="">max</div>
      </template>
    </q-input>
  </div>
  <q-btn color="primary full-width">Copy</q-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'WithDrawForm',
  setup () {
    return {
      model1: ref(null),
      model2: ref(null),
      model3: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
})
</script>
