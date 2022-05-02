<template>
  <div>
    isOpened : {{ isOpened }}
    <q-btn @click="toggle">Открыть модалку</q-btn>
    <ModalComponent></ModalComponent>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref, toRefs
} from 'vue'

import { useModalWithTabsStore } from 'stores/example-store'
import ModalComponent from 'components/ModalComponent.vue'
import { useModalToggler } from 'src/composables/useModalToggler'

export default defineComponent({
  name: 'ExampleComponent',
  components: {
    ModalComponent
  },
  setup () {
    return {
      ...useModalToggler()
    }
  }
})
</script>
