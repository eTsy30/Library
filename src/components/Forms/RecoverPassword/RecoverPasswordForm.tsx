import React from 'react'
import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button'
import { MainContainerForm } from 'components/Forms/SingInForm/SingInForm-style'
import { InputPassword } from 'components/Inputs/InputPassword/InputPassword'
import { revertPassword } from 'redux/revertPassword/revertPassword'
import { useAppDispatch, useAppSelector } from 'store/hook'
type Profile = {
  newPassword: string
  newPasswordRepeat: string
}
export const RecoverPasswordForm = () => {
  const currentUrl = window.location.hash.slice(window.location.hash.indexOf('=') + 1, window.location.hash.length)
  const dispach = useAppDispatch()
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Profile>({ mode: 'onBlur' })
  const onSubmit = (data: any) => {
    const { newPassword, newPasswordRepeat } = data
    if (newPassword === newPasswordRepeat) {
      const data = { password: newPassword, passwordConfirmation: newPasswordRepeat, code: currentUrl }
      dispach(revertPassword(data))
      reset()
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
      />
      <InputPassword
        {...register('newPasswordRepeat', {
          required: true,
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
          },
        })}
        placeholder={'Новый пароль'}
        label={'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
        error={errors.newPassword?.message}
      />
      <Button fontSize='16px' width={'fullWidth'} text='Вход' />
    </MainContainerForm>
  )
}
