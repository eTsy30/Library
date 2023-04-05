import { useForm } from 'react-hook-form'

import { Button } from 'components/Button'
import { MainContainerForm } from 'components/Forms/SingInForm/SingInForm-style'

import { InputBase } from 'components/Inputs/InputBase/InputBase'
import { forgotPassword } from 'redux/forgot-password/forgotPassword'
import { useAppDispatch } from 'store/hook'

type Profile = {
  email: string
}
export const FogotPasswordForm = () => {
  const dispach = useAppDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Profile>({ mode: 'all' })
  const onSubmit = (data: any) => {
    dispach(forgotPassword(data))
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
