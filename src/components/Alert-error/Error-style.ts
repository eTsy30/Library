import styled from 'styled-components'
export const Container = styled.div`
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  padding: 24px 32px;
  gap: 10px;
  position: absolute;
  width: 100%;
  height: 80px;
  top: 64px;
  background: #feebea;
  border: 1.5px solid #f42c4f;
  z-index: 5;
  float: right;
  & > svg:last-child > path {
    fill: black;
  }
  @media screen and (max-width: 768px) {
    padding: 12px 12px;
  }
`
export const Title = styled.p`
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
