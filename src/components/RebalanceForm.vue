<template>
  <div class="q-mb-md">
    <q-input v-model="model.from" label="Choose exchange" hint="From" />
    <q-input v-model="model.to" label="Choose exchange" hint="To" />
    <q-input v-model="model.currency" label="Choose currency" />
    <q-select
      filled
      v-model="model.autocomplete"
      use-input
      input-debounce="0"
      label="Type..."
      :options="balanceOptions"
    >
      <template v-slot:before-options>
        <div class="q-pa-md">
          <q-badge color="blue-grey-3 q-pa-sm q-mb-md">
            Balance: 12.123123123
          </q-badge>
        </div>
      </template>
      <template v-slot:option="{ opt, toggleOption, selected }">
          <q-item class="flex column">
            <q-badge
              :color="selected ? 'deep-orange' : 'blue'"
              @click="toggleOption(opt)"
              class="q-mr-md"
            >
              {{ opt }}
            </q-badge>
          </q-item>
      </template>
      tem
    </q-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RebalanceForm',
  setup () {
    const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
    const balanceOptions = ['10', '25', '50', '100', 'split']
    const model = ref({})
    return {
      model,
      options,
      balanceOptions
    }
  }
})
</script>
