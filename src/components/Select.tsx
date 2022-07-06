import { Path, UseFormRegister } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import styled from 'styled-components'

import { CatFormInput } from '../types/cat-type'

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`
const StyledSelect = styled.select`
  height: 30px;
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  outline: 0;
  &:focus {
    border: 1px solid #c4e4f5;
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`
const SelectName = styled.label`
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

type SelectOptionsType = {
  value: string
  label: string
}

type InputProps = {
  label: Path<CatFormInput>
  name: string
  id: string
  selectOptions: SelectOptionsType[]
  register: UseFormRegister<CatFormInput>
  options: RegisterOptions<CatFormInput>
  error?: string
}

export const Select = ({
  label,
  register,
  options,
  error,
  id,
  selectOptions,
}: InputProps) => {
  return (
    <SelectContainer>
      <SelectName>{label}</SelectName>
      <StyledSelect id={id} {...register(label, options)}>
        {selectOptions.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </StyledSelect>
      {error && <Error>{error}</Error>}
    </SelectContainer>
  )
}
