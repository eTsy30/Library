import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    width: 200px;
    animation-name: rotation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(60deg);
    }
    40% {
      transform: rotate(120deg);
    }
    60% {
      transform: rotate(180deg);
    }
    80% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
