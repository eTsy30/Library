import styled from 'styled-components'

import { ReactComponent as Close } from 'assets/icon/Close.svg'
import Down from 'assets/icon/Down.svg'
import Up from 'assets/icon/Up.svg'

import { IActive } from 'types/isActive'

export const Wrapper = styled.div`
  max-width: 825px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 16px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    gap: 16px;
  }
`

export const ButtonFilter = styled.button<IActive>`
  border: 0;
  background: transparent ${(props) => (props.$isActive ? `url(${Down})` : `url(${Up})`)} no-repeat 16px center;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 599px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 38px;
  color: #a7a7a7;
  width: 100%;
  max-width: 148px;
  :hover {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
  }
  :active {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
  }
  & > * {
    width: 100%;
    margin-left: 16px;
    min-width: 148px;
    margin-left: 16px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 10px;
    max-width: 148px;
    & > * {
      margin-left: 16px;
    }
  }
  @media screen and (max-width: 320px) {
    max-width: 32px;
    min-width: 32px;
    height: 32px;
    padding: 0px;
    display: flex;
    background: transparent ${(props) => (props.$isActive ? `url(${Down})` : `url(${Up})`)} no-repeat center;
    & > * {
      display: none;
    }
  }
`
export const ButtonTablet = styled.button<IActive>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  left: 0px;
  border: 0;
  top: 0px;
  border-radius: 40px;
  box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
  background: ${(props) =>
    props.$isActive ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : '#FFFFFF'};
  :active {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
  }
  :hover {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
  }
  & > svg > path {
    fill: ${(props) => (props.$isActive ? '#FFFFFF' : '#A7A7A7')};
  }
  @media screen and (max-width: 320px) {
    width: 32px;
    height: 32px;
    & > svg > path {
      fill: ${(props) => (props.$isActive ? '#FFFFFF' : '#A7A7A7')};
    }
  }
`
export const ButtonLinar = styled(ButtonTablet)<IActive>`
  margin-left: 16px;
  & > svg > path {
    fill: ${(props) => (props.$isActive ? '#A7A7A7' : '#FFFFFF')};
  }
  background: ${(props) =>
    props.$isActive ? '#FFFFFF' : 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)'};
  :active {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
  }
  :hover {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
  }
  @media screen and (max-width: 320px) {
    width: 32px;
    height: 32px;
    & > svg > path {
      fill: ${(props) => (props.$isActive ? '#A7A7A7' : '#FFFFFF')};
    }
  }
`

export const LeftSide = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`
export const RightSide = styled.div`
  display: flex;
`
export const ImgSearch = styled.button`
  display: none;
  @media screen and (max-width: 320px) {
    display: block;
    width: 32px;
    height: 32px;
    border: 0;
    margin-right: 16px;
    background-color: white;
    box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
      0px 1px 5px rgba(191, 196, 201, 0.24);
    border-radius: 599px;
  }
`

export const CloseImg = styled(Close)`
  width: 100%;
  height: 100%;
`

export const SearchInput = styled.input`
  display: block;
  outline: none;
  border: none;
  width: 100%;
  color: #a7a7a7;
  @media screen and (max-width: 768px) {
    width: 274px;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    display: block;
  }
`
