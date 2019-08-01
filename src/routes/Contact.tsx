import React from 'react'

interface IProps {
  data: {
    text: string
    copyright: string
  }
}

const Contact = ({ data }: IProps) => (
  <div>
    {data.copyright} - {data.text}
  </div>
)

export default Contact
