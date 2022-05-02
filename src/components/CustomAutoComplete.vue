<template>
  <q-select
    filled
    :model-value="model"
    use-input
    @update:model-value="setModel"
    input-debounce="0"
    label="Type percentage"
    :options="options"
    @filter="filterFn"

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
  </q-select>
</template>

<script lang="ts">
import { ref, watch, defineEmits } from 'vue'

const stringOptions = [
  '10%', '25%', '50%', '100%', 'split'
]

export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String
  },
  setup (props: any, ctx: any) {
    const options = ref(stringOptions)
    const model = ref(props.modelValue)

    return {
      model,
      options,

      filterFn (val: string, update: (...args: any[]) => void) {
        if (val === '') {
          update(() => {
            options.value = stringOptions
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      },

      setModel (val: string) {
        model.value = val
        ctx.emit('update:modelValue', val)
      }
    }
  }
}
</script>
