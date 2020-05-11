import { GeneralState, KeyString } from '@store/general/types'
import general from './general'

export interface Component2State {
  componentSettings: KeyString
  title: string
}

interface Component2Props {
  general: GeneralState
  config: Component2State
}

const component2: Component2Props = {
  general: general.config,
  config: {
    componentSettings: { name: 'component2' },
    title: 'Heading hydrated 2',
  },
}

export type Component2Type = Component2Props
export default component2
