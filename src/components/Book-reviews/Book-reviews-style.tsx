import styled from 'styled-components'

import { ReactComponent as Stroke } from 'assets/icon/Stroke.svg'

export const Container = styled.section`
  width: 730px;
  & > h3 span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #a7a7a7;
  }
  & > h3 {
    margin-bottom: 16px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;

    & > h3 {
      height: 46px;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 16px;
    }
  }
  @media screen and (max-width: 320px) {
    width: 100%;

    & > h3 {
      margin-bottom: 8px;
    }
  }
`
export const ListReviews = styled.ul`
  width: 100%;
  margin-bottom: 45px !important;
  & > li:nth-child(2) {
    height: 352px;
    margin: 42px 0;
    margin-top: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #363636;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    & > li:nth-child(2) {
      height: 376px;
    }
  }
  @media screen and (max-width: 320px) {
    width: 100%;

    li:nth-child(2) {
      height: 643px;
      margin: 32px 0;
    }
  }
`
export const Text = styled.p`
  height: 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  gap: 24px;
  align-items: center;
  letter-spacing: 0.1px;
  color: #727272;
  margin-bottom: 18px;
`

export const TextDescription = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;
  @media screen and (max-width: 320px) {
    margin-top: 8px;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
  }
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`
export const Button = styled.button`
  width: 350px;
  height: 52px;
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  border-radius: 30px;
  margin-bottom: 62px;
  border: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #ffffff;
  &:disabled {
    background: #ebebeb;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    height: 52px;
    width: 100%;
    border-radius: 30px;
    font-weight: 600;
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    height: 40px;
    width: 100%;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    border-radius: 20px;
    margin-bottom: 0px;
  }
`
interface IStrokeButton {
  $isActive: boolean
}
export const StrokeButton = styled(Stroke)<IStrokeButton>`
  transition: all 500ms ease-in-out;
  margin-left: 30px;
  height: 18px;
  width: 18px;
  transform: ${(props) => (props.$isActive ? 'rotate(0deg)' : 'rotate(180deg)')};
  path {
    fill: black;
  }
`

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 16px 0px;
`
export const UserNameLabel = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  letter-spacing: 0.1px;
  color: #727272;
`
