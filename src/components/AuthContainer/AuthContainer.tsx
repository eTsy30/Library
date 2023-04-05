import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
type ChildrenType = {
  children: JSX.Element
}
export const AuthContainer = ({ children }: ChildrenType) => {
  return <Wrapper>{children}</Wrapper>
}
