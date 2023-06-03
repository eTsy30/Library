import styled, { css } from 'styled-components'

interface IMsgStatus {
  $isActive: boolean
}
const Success = css`
  background: #ebf9f1;
  border: 1.5px solid #00ca71;
`
const Warning = css`
  background: #feebea;
  border: 1.5px solid #f42c4f;
`
export const Container = styled.div<IMsgStatus>`
  position: absolute;
  top: 20px;
  display: flex;
  max-width: 1110px;
  width: 100%;
  height: 60px;
  padding: 28px 36px;
  border-radius: 5px;
  align-content: center;
  align-items: center;
  z-index: 10;
  ${(props) => (props.$isActive ? Success : Warning)}
  & > svg:first-child {
    margin-right: 28px;
  }
  & > svg:last-child {
    margin-left: auto;
    path {
      fill: black;
    }
  }
`
