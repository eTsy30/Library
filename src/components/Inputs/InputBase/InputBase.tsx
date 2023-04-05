import React, { ForwardedRef, useState } from 'react'

import { Input, Label, InputContainer, Placeholder, LabelError, InputImage } from './InputBase-style'

import { ReactComponent as EyeClosed } from 'assets/icon/EyeClosed.svg'
import { ReactComponent as EyeOpen } from 'assets/icon/EyeOpen.svg'
interface IInput {
  placeholder: string
  label?: string
  name: string
  error?: string
  type: string
  disabled?: boolean
}
export const InputBase = React.forwardRef(({ placeholder, label, name, error, type, ...props }: IInput, ref: any) => {
  const [visiblePass, setViseblePass] = useState(true)

  return (
    <InputContainer>
      <Input ref={ref} {...props} type={type} placeholder=' ' name={name} />
      {error ? <LabelError htmlFor=''>{error}</LabelError> : <Label htmlFor=''>{label}</Label>}
      <Placeholder>{placeholder}</Placeholder>
      {type === 'password' && (
        <InputImage onClick={() => setViseblePass(!visiblePass)}>
          {visiblePass ? <EyeClosed /> : <EyeOpen />}
        </InputImage>
      )}
    </InputContainer>
  )
})
