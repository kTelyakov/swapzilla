<template>
  <div>
    <q-btn @click="store.toggle">Открыть модалку</q-btn>
    <ModalComponent></ModalComponent>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

import ModalComponent from 'components/ModalComponent.vue'
import useModalComposition from "stores/modalComposition"

export default defineComponent({
  name: 'ExampleComponent',
  components: {
    ModalComponent
  },
  setup () {
    const store = useModalComposition()
    return {
      store
    }
  }
})
</script>
