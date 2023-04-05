import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Panel = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px 20px 16px;
  gap: 16px;
  width: 528px;
  height: 64px;
  background: #f9f9fa;
  border-radius: 16px 16px 0px 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
`
export const TitleLabel = styled.h4`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #727272;
  flex: none;
  order: 1;
  flex-grow: 0;
`

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 528px;
  height: 422px;
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 56px 51px 56px;
  margin-bottom: 32px;
  justify-content: space-evenly;

  @media screen and (max-width: 320px) {
    width: 288px;
    height: 464px;
    padding: 24px 16px;
  }
`
export const Title = styled.h2`
  font-size: 24px;
  line-height: 30px;
  color: #363636;
`
export const SubTitle = styled.h4`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #363636;
  margin-bottom: 32px;
`
export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #727272;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  & > a {
    margin: 5px 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: red;
  }
  @media screen and (max-width: 320px) {
    & > a {
      margin: 3px 0px;
    }
  }
`
export const HeaderContainer = styled.div``
export const MainContainerForm = styled.form`
  margin-bottom: 32px;
  @media screen and (max-width: 320px) {
    margin-bottom: 0px;
  }
`
export const FooterWrapper = styled.div`
  @media screen and (max-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`
export const Linka = styled(Link)`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #363636;
  flex: none;
  order: 1;
  flex-grow: 0;
  padding: 5px;
`
