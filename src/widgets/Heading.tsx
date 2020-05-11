import React from 'react'
import { useSelector } from 'react-redux'

import { Component2State } from '@server/appData/component2'
import { Component3State } from '@server/appData/component3'
import { AppState } from '@store/rootReducer'

interface Props {
  configId: string
}

const Heading = ({ configId }: Props): JSX.Element => {
  const heading = useSelector((state: AppState) => state[configId]) as
    | Component2State
    | Component3State

  const { title } = heading

  return <h2 onClick={() => alert(title)}>{title}</h2>
}

export default Heading
