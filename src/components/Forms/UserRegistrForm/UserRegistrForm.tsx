import React, { ReactNode, useState } from 'react'

import { Controller, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { MainContainerForm, SubTitle } from 'components/AuthForm/AuthForm-style'
import { Button } from 'components/Button'
import { InputBase } from 'components/Inputs/InputBase/InputBase'
import { InputPassword } from 'components/Inputs/InputPassword/InputPassword'

type Profile = {
  login: string
  password: string
  name: string
  lastName: string
  phone: string
  email: string
}
export const UserRegistrForm = () => {
  const [formStep, setFormStep] = useState(3)
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<Profile>({ mode: 'onBlur' })
  const onSubmit = (data: any) => {
    if (formStep === 1) {
      setFormStep(2)
    }
    if (formStep === 2) {
      setFormStep(3)
    }
    if (formStep === 3) {
      console.log(data)
      reset()
    }
  }

  return (
    <>
      <SubTitle>{`${formStep} шаг из 3`}</SubTitle>
      <MainContainerForm onSubmit={handleSubmit(onSubmit)}>
        {formStep == 1 && (
          <section>
            <InputBase
              {...register('login', {
                required: true,
                minLength: { value: 2, message: 'Логин доден быть больше 2 символов' },
              })}
              placeholder='Придумайте логин для входа'
              label={'Используйте для логина латинский алфавит и цифры'}
              error={errors.login?.message}
              type='text'
            />

            <InputPassword
              {...register('password', {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                },
              })}
              placeholder={'Пароль'}
              label={'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
              error={errors.password?.message}
            />
          </section>
        )}
        {formStep === 2 && (
          <section>
            <InputBase
              {...register('name', {
                required: true,
                minLength: { value: 2, message: 'Имя должно  иметь больше 2 символов' },
              })}
              placeholder='Имя'
              error={errors.name?.message}
              type='text'
            />
            <InputBase
              {...register('lastName', {
                required: true,
                minLength: { value: 2, message: 'Фамилия должна иметь больше 2 символов' },
              })}
              placeholder={'Фамилия'}
              error={errors.lastName?.message}
              type='text'
            />
          </section>
        )}
        {formStep === 3 && (
          <section>
            <Controller
              name='phone'
              control={control}
              rules={{
                pattern: {
                  value: /^(\+375)([(]?)(29|25|44|33)([)]?)(\d{3})([-]?)(\d{2})([-]?)(\d{2})$/,
                  message: 'Введите корректрый номер',
                },
              }}
              render={({ fieldState: { error }, ...props }) => (
                <InputMask
                  mask='+375(99)999-99-99'
                  value={props.field.value ? props.field.value : ''}
                  disabled={false}
                  onChange={(value): void => {
                    console.log(error)

                    props.field.onChange(value)
                  }}
                >
                  <InputBase
                    disabled={false}
                    name='phone'
                    error={error?.message}
                    type='tel'
                    placeholder='+375(00)000-00-00'
                  />
                </InputMask>
              )}
            />

            <InputBase
              {...register('email', {
                required: true,
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Введите корректрый email',
                },
              })}
              placeholder={'E-mail'}
              error={errors.email?.message}
              type='email'
            />
          </section>
        )}

        <Button fontSize='16px' width={'fullWidth'} text='следующий шаг' />
      </MainContainerForm>
    </>
  )
}
