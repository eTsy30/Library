import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from 'components/Button'
import { MainContainerForm } from 'components/Forms/SingInForm/SingInForm-style'

import { InputBase } from 'components/Inputs/InputBase/InputBase'
import { InputPassword } from 'components/Inputs/InputPassword/InputPassword'
type Profile = {
  newPassword: string
  newPasswordRepeat: string
}
export const RecoverPasswordForm = () => {
  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Profile>({ mode: 'onBlur' })
  const onSubmit = (data: any) => {
    console.log(data)
    const { newPassword, newPasswordRepeat } = data
    if (newPassword === newPasswordRepeat) {
      console.log(data)
    } else {
    }
  }
  return (
    <MainContainerForm onSubmit={handleSubmit(onSubmit)}>
      <InputPassword
        {...register('newPassword', {
          required: true,
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
          },
        })}
        placeholder={'Новый пароль'}
        label={'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
        error={errors.newPassword?.message}
      />{' '}
      {/* <InputPassword
        {...register('newPasswordRepeat', {
          required: true,
          validate: (val: string) => {
            if (watch('password') != val) {
              return 'Your passwords do no match'
            }
          },
        })}
        placeholder={'Повторите пароль'}
        label={'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
        error={errors.newPasswordRepeat?.message}
      /> */}
      <Button fontSize='16px' width={'fullWidth'} text='Вход' />
    </MainContainerForm>
  )
}
