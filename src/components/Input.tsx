import { Path, UseFormRegister } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import styled from 'styled-components'

import { CatFormInput } from '../types/cat-type'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`
const StyledInput = styled.input<{ multiple: boolean }>`
  height: ${(p) => (p.multiple ? 90 : 30)}px;
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  outline: 0;
  resize: none;
  &:focus {
    border: 1px solid #c4e4f5;
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`
const InputName = styled.label`
  padding: 2px 0;
  font-size: 10px;
  font-weight: 600;
  color: #aaaaaa;
  text-transform: uppercase;
`
const Error = styled.div`
  color: red;
  font-size: 12px;
`

type InputProps = {
  label: Path<CatFormInput>
  register: UseFormRegister<CatFormInput>
  options: RegisterOptions<CatFormInput>
  error?: string
  multiple?: boolean
}

export const Input = ({
  label,
  register,
  options,
  error,
  multiple = false,
}: InputProps) => {
  return (
    <InputContainer>
      <InputName>{label}</InputName>
      <StyledInput
        {...register(label, options)}
        as={multiple ? 'textarea' : ''}
        multiple={multiple}
      />
      {error && <Error>{error}</Error>}
    </InputContainer>
  )
}
