import React from 'react'
import styled from 'styled-components'

import { useCats } from '../store'
import { CatType } from '../types/cat-type'
import { Button } from './Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #fff;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

const StyledButton = styled(Button)`
  margin: 10px;
  padding: 10px 20px;
`
const CancelButton = styled(StyledButton)`
  background: #fafafa;
  border: 1px solid dimgray;
  color: black;
  &:hover {
    background: #ededed;
  }
`
const RemoveButton = styled(StyledButton)`
  background: #fafafa;
  border: 1px solid #eb2f2f;
  color: black;
  min-width: 70px;
  &:hover {
    background: #fed2d2;
  }
`

interface RemoveCatProps {
  cat: CatType | null
  onClose: () => void
}

export const RemoveCat = ({ cat, onClose }: RemoveCatProps) => {
  const removeCat = useCats((state) => state.removeCat)

  const onRemove = () => {
    onClose()
    if (cat) {
      removeCat(cat.id)
    }
  }

  return (
    <Wrapper>
      Do you really want to remove {cat?.name} cat? 😿
      <Buttons>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <RemoveButton onClick={onRemove}>Remove Cat 😿</RemoveButton>
      </Buttons>
    </Wrapper>
  )
}
