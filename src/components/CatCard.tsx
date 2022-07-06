import React from 'react'
import styled from 'styled-components'

import { CatType } from '../types/cat-type'

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 2px solid #869fd1;
  border-radius: 5px;
  transition: 0.25s ease-in-out;
  &:hover {
    box-shadow: 0 10px 30px #d9dbdf;
    background-color: #e8f4fa;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 20px;
`
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 10px 10px;
`
const Avatar = styled.div<{ imageId: number }>`
  height: 145px;
  width: 110px;
  background: url('https://placekitten.com/220/290?image=${(p) => p.imageId}')
    center center no-repeat;
  background-size: contain;
`
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 145px;
  flex: 1;
  padding-left: 15px;
  color: black;
`
const Name = styled.div`
  font-size: 16px;
  padding-bottom: 10px;
`
const IconButton = styled.div`
  padding: 5px 5px;
  height: 20px;
  line-height: 15px;
  font-size: 16px;
  cursor: pointer;
`
interface CatCardProps {
  cat: CatType
  openEditCat: (value: CatType) => void
  openRemoveCat: (value: CatType) => void
}

export const CatCard = ({ cat, openEditCat, openRemoveCat }: CatCardProps) => {
  return (
    <Wrapper>
      <Header>
        <IconButton onClick={() => openEditCat(cat)}>✎</IconButton>
        <IconButton onClick={() => openRemoveCat(cat)}>✕</IconButton>
      </Header>
      <Content>
        <Avatar imageId={cat.id} />
        <InfoBox>
          <Name>{cat.name}</Name>
          <div>Date of birth: {cat.birthDate}</div>
          {cat.bio}
        </InfoBox>
      </Content>
    </Wrapper>
  )
}
