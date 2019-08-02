import React from 'react'

import styled from '@theme/styled-components'

interface IProps {
  data: {
    logo: string
  }
}

const Header = ({ data }: IProps) => (
  <StyledHeader>
    <img src={data.logo} alt="logo" />
  </StyledHeader>
)

const StyledHeader = styled.div`
  background: #000;
  width: 100%;
  padding: 20px 25px;
  margin-bottom: 30px;
`

export default Header
