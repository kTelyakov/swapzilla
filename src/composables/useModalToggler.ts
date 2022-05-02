import { useModalWithTabsStore } from 'stores/example-store'
import { toRefs } from 'vue'

export const useModalToggler = () => {
  const store = useModalWithTabsStore()
  const { isOpened } = toRefs(store)
  return {
    isOpened,
    toggle: store.toggle
  }
}
