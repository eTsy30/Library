import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from 'components/Button'
import { Linka, MainContainerForm } from 'components/Forms/SingInForm/SingInForm-style'

import { InputBase } from 'components/Inputs/InputBase/InputBase'
import { InputPassword } from 'components/Inputs/InputPassword/InputPassword'
type Profile = {
  email: string
}
export const FogotPasswordForm = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Profile>({ mode: 'all' })
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <MainContainerForm onSubmit={handleSubmit(onSubmit)}>
      <InputBase
        {...register('email', {
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Введите корректрый email',
          },
        })}
        placeholder={'E-mail'}
        type='email'
        label={'На это email  будет отправлено письмо с инструкциями по восстановлению пароля'}
        error={errors.email?.message}
      />
      <Button fontSize='16px' width={'fullWidth'} text='Вход' />
    </MainContainerForm>
  )
}
