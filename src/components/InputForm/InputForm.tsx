import React from 'react'

import { Input, Label, InputContainer, Placeholder } from './InputForm-style'
interface IInput {
  placeholder: string
  label?: string
  register?: any
}
export const InputForm = React.forwardRef(({ placeholder, label, name, onChange, onBlur }: any, ref: any) => {
  return (
    <InputContainer>
      <Input ref={ref} onChange={onChange} onBlur={onBlur} type='text' placeholder=' ' name={name} />
      <Label htmlFor=''>{label}</Label>
      <Placeholder>{placeholder}</Placeholder>
    </InputContainer>
  )
})
