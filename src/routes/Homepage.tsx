import React from 'react'

import Heading from '@components/Heading'

interface IProps {
  data: {
    text1: string
    text2: string
  }
}

const Homepage = ({ data }: IProps) => (
  <div>
    <Heading />
    {data.text1} {data.text2}
  </div>
)

export default Homepage
