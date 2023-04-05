import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import { Linka, MainContainerForm } from './SingInForm-style'

import { Button } from 'components/Button'
import { InputBase } from 'components/Inputs/InputBase/InputBase'
import { InputPassword } from 'components/Inputs/InputPassword/InputPassword'
import { singInUser } from 'redux/singIn/singIn'
import { useAppDispatch } from 'store/hook'
type Profile = {
  email: string
  password: string
}
export const SingInForm = () => {
  const dispach = useAppDispatch()

  const { register, reset, handleSubmit } = useForm<Profile>({ mode: 'all' })

  const onSubmit = (data: any) => {
    dispach(singInUser(data))
    reset()
  }
  return (
    <MainContainerForm onSubmit={handleSubmit(onSubmit)}>
      <InputBase
        {...register('email', {
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
      <Linka to={'/FogotPassword'}>Забыли логин или пароль?</Linka>
      <Button fontSize='16px' width={'fullWidth'} text='Вход' />
    </MainContainerForm>
  )
}
