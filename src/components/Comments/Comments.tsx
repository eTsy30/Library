import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ContainerForm, Title, SubTitle, TextArea } from './Comments-style'

import { Button } from 'components/Button'

import { ModalContainer } from 'components/ModalContainer/ModalContainer'
import { StarReiting } from 'components/Star-reiting'
import { Star } from 'components/Star-reiting/Star'

import { commetnPost } from 'redux/postComments/postComments'
import { useAppDispatch } from 'store/hook'
import { Irating } from 'types/rating'

type Comment = {
  rating: string
  text: string
  createdcomment: string
  user: string
  book: string
}

const CommentPost = () => {}
export const Comments = ({ rating, bookId }: Irating) => {
  const dispach = useAppDispatch()

  const [nevRaiting, setNevRaiting] = useState(rating ? rating : 0)
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Comment>({ mode: 'onBlur' })
  const handlRaiting = (raiting: number) => {
    setNevRaiting(raiting)
  }

  const onSubmit = (data: any) => {
    const postData = {
      rating: nevRaiting.toString(),
      text: data?.text.toString(),
      createdcomment: new Date().toISOString().slice(0, 10),
      user: localStorage.getItem('idUser'),
      book: bookId,
    }
    dispach(commetnPost(postData))
  }
  return (
    <ModalContainer>
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Оцените книгу</Title>
        <SubTitle>Ваша оценка</SubTitle>
        <StarReiting rating={0} getRaiting={handlRaiting} />
        <TextArea {...register('text', { required: true })} />
        <Button text='оценить' onClick={CommentPost} width={'fullWidth'} />
      </ContainerForm>
    </ModalContainer>
  )
}
