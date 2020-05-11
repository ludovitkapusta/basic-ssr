import { GeneralState, KeyString } from '@store/general/types'
import general from './general'

export interface ContactState {
  componentSettings: KeyString
  text: string
  copyright: string
}

interface ContactProps {
  general: GeneralState
  config: ContactState
}

const contact: ContactProps = {
  general: general.config,
  config: {
    componentSettings: { name: 'contact' },
    text:
      'This component is render by SSR only. It is not mounted by client script in client/index.js and it is not possible to run here any client JS.',
    copyright: '© 2019',
  },
}

export type ContactType = ContactProps
export default contact
