import styled from 'styled-components'

import { ReactComponent as BurgerIcon } from 'assets/icon/Burger.svg'
import { ReactComponent as CloseIcon } from 'assets/icon/BurgerClose.svg'

export const Wrapper = styled.div`
  max-width: 1110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 47px;
  box-shadow: 4px 4px 4px rgba(54, 54, 54, 0.05), -4px 4px 4px rgba(54, 54, 54, 0.05);
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  @media screen and (max-width: 320px) {
    font-size: 18px;
  }
`
export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`
export const NameUser = styled.h6`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  margin-right: 16px;
`

export const Avatar = styled.img`
  filter: drop-shadow(0px 2px 4px rgba(191, 196, 201, 0.2)) drop-shadow(0px 3px 4px rgba(191, 196, 201, 0.18))
    drop-shadow(0px 1px 5px rgba(191, 196, 201, 0.24));
  border-radius: 150px;
  width: 58px;
  height: 58px;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const Image = styled.img`
  margin-right: 120px;
  width: 165px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`
export const ImageMobile = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    margin-right: 32px;
    width: 26px;
    display: block;
  }
  @media screen and (max-width: 320px) {
    margin-right: 20px;
    width: 26px;
    display: block;
  }
`
export const Burger = styled(BurgerIcon)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 25px;
    height: 25px;
    margin-right: 32px;
    display: block;
    & > path {
      display: block;
      fill: black;
      width: 55px;
      height: 55px;
    }
  }
  @media screen and (max-width: 320px) {
    display: block;
    width: 25px;
    height: 25px;
    margin-right: 20px;
    display: block;
    & > path {
      display: block;
      fill: black;
      width: 55px;
      height: 55px;
    }
  }
`
export const Close = styled(CloseIcon)`
  display: none;
  path {
    fill: black;
  }
  @media screen and (max-width: 768px) {
    display: block;
    width: 25px;
    height: 25px;
    margin-right: 32px;
    & > path {
      display: block;
      fill: black;
      width: 55px;
      height: 55px;
    }
  }
  @media screen and (max-width: 320px) {
    display: block;
    width: 25px;
    height: 25px;
    margin-right: 20px;
    display: block;
    & > path {
      display: block;
      fill: black;
      width: 55px;
      height: 55px;
    }
  }
`
