import styled, { keyframes } from 'styled-components'
const showPopUP = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0%;
  }
  to {
    transform: translateY(0%);
    opacity: 100%;
  
  }
`
export const Container = styled.section`
  width: 270px;
  height: 152px;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(54, 54, 54, 0.05), -4px 4px 4px rgba(54, 54, 54, 0.05);
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 32px 24px 32px 0px;
  z-index: 3;
  position: absolute;
  right: 2px;
  margin: -46px -1px 0 auto;
  animation: ${showPopUP} 1s;
`

export const Button = styled.button`
  border: none;
  text-align: end;
  background-color: white;
  padding-bottom: 32px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
`
