import styled from 'styled-components'
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
`
export const Wrapper = styled.div`
  padding: 0px 16px;
  background: #f9f9fa;
  position: fixed;
  left: 64px;
  top: 55px;
  width: 100%;
  max-width: 502px;
  padding: 32px 0px 52px 32px;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    position: relative;
    left: 45px;
    top: 10px;
  }

  @media screen and (max-width: 320px) {
    max-width: 288px;
    position: relative;
    left: 17px;
    top: 55px;
  }
`

export const Div = styled.div`
  display: none;
`
