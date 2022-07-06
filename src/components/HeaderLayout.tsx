import React from 'react'
import styled from 'styled-components'

import { Container } from './Container'
import { Search } from './Search'

const Header = styled.header`
  padding: 10px 20px;
`
const Title = styled.div`
  flex: 1;
  font-size: 40px;
`
const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

interface HeaderLayoutProps {
  children: React.ReactNode
}

export const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <>
      <Header>
        <Container>
          <HeaderContent>
            <Title>Furry Friends</Title>
            <Search label="search" />
          </HeaderContent>
        </Container>
      </Header>
      <Container>{children}</Container>
    </>
  )
}
