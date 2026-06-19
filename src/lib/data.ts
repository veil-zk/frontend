export type Screen = 'landing' | 'features' | 'howitworks' | 'hunt' | 'submit' | 'verify' | 'create'
export type Filter = 'all' | 'open' | 'claimed'
export type Token = 'XLM' | 'USDC'

export interface Bounty {
  id: string
  status: 'open' | 'claimed'
  reward: string
  rewardNum: number
  title: string
  desc: string
  victim: string
}

export interface AppState {
  screen: Screen
  filter: Filter
  search: string
  activeId: string
  fileLoaded: boolean
  fileName: string
  dragging: boolean
  verifyStep: number
  verified: boolean
  balance: number
  claimed: Record<string, boolean>
  form: { addr: string; imageId: string; reward: string; token: Token }
  toast: string | null
}

export const BOUNTIES: Bounty[] = [
  { id: 'factoring', status: 'open',    reward: '500 XLM',   rewardNum: 500,  title: 'Factoring guard',  desc: 'Break the multiplication invariant without revealing the factors.',      victim: 'CA4F…9XQ2' },
  { id: 'overflow',  status: 'open',    reward: '750 XLM',   rewardNum: 750,  title: 'Overflow check',   desc: 'Trigger an arithmetic overflow the guard fails to catch.',              victim: 'CB18…7K4D' },
  { id: 'access',    status: 'claimed', reward: '1,200 XLM', rewardNum: 1200, title: 'Access bypass',    desc: 'Call a privileged path without the admin signature.',                   victim: 'CC93…0XR1' },
  { id: 'rounding',  status: 'open',    reward: '300 XLM',   rewardNum: 300,  title: 'Rounding drain',   desc: 'Drain value through repeated rounding in the fee math.',                victim: 'CD52…2M8F' },
  { id: 'reentry',   status: 'claimed', reward: '900 XLM',   rewardNum: 900,  title: 'Re-entrancy',      desc: "Re-enter settle() before balances update.",                             victim: 'CE77…1QP6' },
  { id: 'oracle',    status: 'open',    reward: '650 XLM',   rewardNum: 650,  title: 'Oracle skew',      desc: 'Push a price the bounds check should reject.',                          victim: 'CF04…9ZB3' },
]

export const STEPS = [
  'Submitting receipt to contract',
  'Verifying proof on-chain (RISC Zero)',
  'Checking victim binding',
  'Releasing reward',
]

export const INITIAL_STATE: AppState = {
  screen: 'landing',
  filter: 'all',
  search: '',
  activeId: 'factoring',
  fileLoaded: false,
  fileName: '',
  dragging: false,
  verifyStep: 0,
  verified: false,
  balance: 2450,
  claimed: {},
  form: { addr: '', imageId: '', reward: '', token: 'XLM' },
  toast: null,
}
