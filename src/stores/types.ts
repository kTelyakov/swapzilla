import type { Store } from 'pinia'

export type Name = 'ModalComposition';

type TabTypes = 'Deposit' | 'Withdraw' | 'Rebalance'

type Tab = {
  name: TabTypes
  label: TabTypes
}

export type State = {
  isOpened: boolean
  tabs: Tab[]
  tab: TabTypes
};

export type Getters = Record<any, any>;

export type Actions = {
  toggle (): void
} & ThisType<State & Getters & Actions>;

export type StoreType = Store<Name, State, Getters, Actions>;
