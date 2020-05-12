import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '@store/rootReducer'
import { ContactState } from '@server/appData/contact'

interface Props {
  configId: string
}

const Contact = ({ configId }: Props): JSX.Element => {
  const contact = useSelector(
    (state: AppState) => state[configId]
  ) as ContactState

  const { copyright, text } = contact

  return (
    <div>
      {copyright}
      {' - '}
      {text}
    </div>
  )
}

export default Contact
