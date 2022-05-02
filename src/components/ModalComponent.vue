<template>
  <q-dialog v-model="store.isOpened">
    <q-card>
      <q-card-section>
        <q-tabs
          v-model="store.tab"
          class="text-teal"
        >
          <q-tab v-for="{ name, label } in store.tabs" :key="name" :name="name" :label="label" />
        </q-tabs>
      </q-card-section>

      <q-card-section>
        <component v-bind:is="store.tab"></component>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import useModalComposition from 'stores/modalComposition'

export default defineComponent({
  name: 'ModalComponent',
  components: {
    Deposit: defineAsyncComponent(() => import('components/DepositForm.vue')),
    Withdraw: defineAsyncComponent(() => import('components/WithDrawForm.vue')),
    Rebalance: defineAsyncComponent(() => import('components/RebalanceForm.vue'))
  },
  setup () {
    const store = useModalComposition()
    return {
      store
    }
  }
})
</script>
