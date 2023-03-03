import styled from 'styled-components'

export const TextAbout = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #363636;
  margin: 16px 0px;
  &:nth-child(2) {
    margin-bottom: 26px;
  }
`

export const TitleAbout = styled.h3`
  width: 350px;
  height: 44px;
  border-bottom: 1px solid #ebebeb;
  margin-top: 62px;
  @media screen and (max-width: 768px) {
    width: 305px;
    height: 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 48px;
  }
  @media screen and (max-width: 480px) {
    width: 209px;
    margin-top: 42px;
    margin-bottom: 0;
  }
`
