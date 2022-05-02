import { defineStore } from 'pinia'

export const useModalWithTabsStore = defineStore('useModalWithTabsStore', {
  state: () => ({
    isOpened: false
  }),
  getters: {

  },
  actions: {
    toggle () {
      console.log('BEFORE this.isOpened : ', this.isOpened)
      this.isOpened = !this.isOpened
      console.log('AFTER this.isOpened : ', this.isOpened)
    }
  }
})
