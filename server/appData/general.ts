import { GeneralState } from '@store/general/types'

interface GeneralProps {
  config: GeneralState
}

const general: GeneralProps = {
  config: {
    componentSettings: { name: 'general' },
    urls: {},
    requestVerificationToken: '',
    localizations: {},
  },
}

export type GeneralType = GeneralState
export default general
