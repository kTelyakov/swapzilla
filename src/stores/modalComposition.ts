import { defineStore } from 'pinia'
import type { Name, State, Getters, Actions } from './types'

export default defineStore<Name, State, Getters, Actions>('ModalComposition', {
  state: () => ({
    isOpened: false,
    tab: 'Deposit',
    tabs: [
      {
        name: 'Deposit',
        label: 'Deposit'
      },
      {
        name: 'Withdraw',
        label: 'Withdraw'
      },
      {
        name: 'Rebalance',
        label: 'Rebalance'
      }
    ],
    depositModel: {},
    withdrawModel: {},
    rebalanceModel: {}
  }),
  getters: {

  },
  actions: {
    toggle () {
      this.isOpened = !this.isOpened
    }
  }
})
