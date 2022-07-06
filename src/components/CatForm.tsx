import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'

import { useCats } from '../store'
import { CatFormInput, CatType } from '../types/cat-type'
import { Button } from './Button'
import { Input } from './Input'
import { Select } from './Select'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #fff;
  padding: 10px 0 15px;
  border-radius: 5px;
`
const StyledButton = styled(Button)`
  margin: 15px 0;
`
const Title = styled.div`
  font-size: 20px;
  padding-bottom: 30px;
`

interface CatFormProps {
  cat?: CatType | null
  onSave: () => void
}

export const CatForm = ({ cat, onSave }: CatFormProps) => {
  const addCat = useCats((state) => state.addCat)
  const editCat = useCats((state) => state.editCat)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CatFormInput>({
    defaultValues: cat || {},
  })

  const onSubmit: SubmitHandler<CatFormInput> = (data) => {
    onSave()
    if (cat) {
      return editCat({ ...data, id: cat.id })
    }
    addCat(data)
  }
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>{cat ? 'Edit cat' : 'Add new cat'}</Title>
      <Input
        label="name"
        register={register}
        options={{
          required: 'Name is required',
        }}
        error={errors.name?.message}
      />
      <Select
        label="gender"
        name="gender"
        id="gender"
        register={register}
        selectOptions={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ]}
        options={{
          required: 'Gender is required',
        }}
        error={errors.gender?.message}
      />
      <Input
        label="birthDate"
        register={register}
        options={{
          required: 'Birth date is required',
          pattern: {
            value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
            message: 'Please enter a valid birth date (YYYY-MM-DD)',
          },
        }}
        error={errors.birthDate?.message}
      />
      <Input
        label="bio"
        register={register}
        options={{
          required: false,
        }}
        error={errors.bio?.message}
        multiple
      />
      <StyledButton type="submit">Save Changes</StyledButton>
    </FormWrapper>
  )
}
