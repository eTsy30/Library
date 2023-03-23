import React, { useState } from 'react'

import { ReactComponent as EyeClosed } from 'assets/icon/EyeClosed.svg'
import { ReactComponent as EyeOpen } from 'assets/icon/EyeOpen.svg'
import {
  Input,
  Label,
  InputContainer,
  Placeholder,
  LabelError,
  InputImage,
} from 'components/Inputs/InputBase/InputBase-style'
interface IInput {
  placeholder: string
  label?: string
}
export const InputPassword = React.forwardRef(({ placeholder, label, name, error, ...props }: any, ref: any) => {
  const [visiblePass, setViseblePass] = useState(true)
  const [isPassword, setIsPassword] = useState('password')

  return (
    <InputContainer>
      <Input ref={ref} {...props} type={isPassword} placeholder=' ' name={name} />
      {error ? <LabelError htmlFor=''>{error}</LabelError> : <Label htmlFor=''>{label}</Label>}
      <Placeholder>{placeholder}</Placeholder>

      <InputImage
        onClick={() => {
          setViseblePass(!visiblePass)
          setIsPassword(isPassword === 'password' ? 'text' : 'password')
        }}
      >
        {visiblePass ? <EyeClosed /> : <EyeOpen />}
      </InputImage>
    </InputContainer>
  )
})
