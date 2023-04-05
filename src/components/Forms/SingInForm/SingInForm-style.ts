import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const MainContainerForm = styled.form`
  margin: 32px, 0px;
`
export const Linka = styled(Link)`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #a7a7a7;
  mix-blend-mode: normal;
  margin-top: 20px;
  margin-bottom: 32px;
  display: block;
  &:hover {
    color: black;
  }
`
