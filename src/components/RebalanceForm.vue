<template>
  <div class="q-mb-md">
    <q-input v-model="model.from" label="Choose exchange" hint="From" />
    <q-input v-model="model.to" label="Choose exchange" hint="To" />
    <q-input v-model="model.currency" label="Choose currency" />
    model.balance : {{ model.balance }}
    <CustomAutoComplete v-model="model.balance"></CustomAutoComplete>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomAutoComplete from 'components/CustomAutoComplete.vue'
import useModalComposition from 'stores/modalComposition'

export default defineComponent({
  name: 'RebalanceForm',
  components: {
    CustomAutoComplete
  },
  setup () {
    const store = useModalComposition()
    const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
    return {
      model: store.rebalanceModel,
      options
    }
  }
})
</script>
