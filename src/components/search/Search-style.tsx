import styled from 'styled-components'

import { ISearchButton } from 'types/isActive'

export const SearchInput = styled.input`
  display: block;
  outline: none;
  border: none;
  width: 100%;
  max-width: 350px;
  color: #a7a7a7;
  @media screen and (max-width: 768px) {
    width: 274px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    display: block;
  }
`
export const Div = styled.div<ISearchButton>`
  display: flex;
  border: 1px solid #000;
  justify-content: center;
  width: 100%;
  border: 0;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 599px;
  max-width: 350px;
  height: 100%;
  color: #f83600;
  padding: 10px 10px 10px 10px;
  margin-right: 16px;
  outline: none;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    margin-right: 0px;
    display: ${(props) => (props.isActiveSearch ? 'none' : 'flex')};
  }
`
