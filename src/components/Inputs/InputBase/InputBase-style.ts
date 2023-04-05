import styled from 'styled-components'
export const Placeholder = styled.label`
  position: absolute;
  top: 18px;
  left: 12px;
  font-size: 16px;
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
  transition: 0.3s;
`

export const Input = styled.input`
  position: relative;
  display: flex;
  justify-content: center;
  background: #f9f9fa;
  border-radius: 4px;
  border: none;
  border-bottom: 1px solid #bfc4c9;
  height: 56px;
  width: 100%;
  padding-left: 19px;
  border-radius: 4px;
  color: #363636;
  outline: none;
  padding-top: 10px;
  transition: 0.3s;
  &:focus ~ ${Placeholder},&:not(:placeholder-shown) ~ ${Placeholder} {
    top: 0px;
    font-size: 12px;
    color: #a7a7a7;
  }
`
export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #a7a7a7;
  padding-left: 12px;
  mix-blend-mode: normal;
`
export const InputContainer = styled.div`
  margin-bottom: 18px;
  position: relative;
`
export const LabelError = styled.label`
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: red;
  padding-left: 12px;
  mix-blend-mode: normal;
`

export const InputImage = styled.div`
  position: absolute;
  right: 5%;
  top: 15px;
  z-index: 1;
`
