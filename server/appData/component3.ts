import { GeneralState, KeyString } from '@store/general/types'
import general from './general'

export interface Component3State {
  componentSettings: KeyString
  title: string
}

interface Component3Props {
  general: GeneralState
  config: Component3State
}

const component3: Component3Props = {
  general: general.config,
  config: {
    componentSettings: { name: 'component3' },
    title: 'Heading hydrated 1',
  },
}

export type Component3Type = Component3Props
export default component3
