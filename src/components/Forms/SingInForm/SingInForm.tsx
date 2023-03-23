import React from 'react'
import { useForm } from 'react-hook-form'

import { Linka, MainContainerForm } from './SingInForm-style'

import { Button } from 'components/Button'
import { InputBase } from 'components/Inputs/InputBase/InputBase'
import { InputPassword } from 'components/Inputs/InputPassword/InputPassword'
type Profile = {
  login: string
  password: string
}
export const SingInForm = () => {
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
        {...register('login', {
          required: true,
        })}
        placeholder='Логин'
        type='text'
      />
      <InputPassword
        {...register('password', {
          required: true,
        })}
        placeholder={'Пароль'}
      />
      <Linka to={'https://www.google.com/'}>Забыли логин или пароль?</Linka>
      <Button fontSize='16px' width={'fullWidth'} text='Вход' />
    </MainContainerForm>
  )
}
