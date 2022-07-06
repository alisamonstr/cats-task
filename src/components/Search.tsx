import { useRouter } from 'next/router'
import styled from 'styled-components'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`
const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  outline: 0;
  resize: none;
  &:focus {
    border: 1px solid #c4e4f5;
  }
`
const InputName = styled.label`
  padding: 2px 0;
  font-size: 10px;
  font-weight: 600;
  color: #aaaaaa;
  text-transform: uppercase;
`

type InputProps = {
  label: string
}

export const Search = ({ label }: InputProps) => {
  const router = useRouter()
  const {
    query: { search },
  } = router
  return (
    <InputContainer>
      <InputName>{label}</InputName>
      <StyledInput
        defaultValue={search}
        onChange={(e) => {
          router.push({ query: { search: e.target.value } })
        }}
      />
    </InputContainer>
  )
}
