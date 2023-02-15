import styled from 'styled-components'

import { ReactComponent as StarImg } from 'assets/icon/Star.svg'

interface StarProps {
  isStarColor: boolean
}
const Wrapper = styled.div<StarProps>`
  & > svg {
    fill: ${(props) => (props.isStarColor ? '#FFBC1F' : '')};
  }
`

interface IStar {
  isStarColor: boolean
  onMouseEnter: React.MouseEventHandler<HTMLDivElement> | undefined
  onMouseLeave: React.MouseEventHandler<HTMLDivElement> | undefined
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}
export const Star = ({ isStarColor, onMouseEnter, onMouseLeave, onClick }: IStar) => (
  <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} isStarColor={isStarColor}>
    <StarImg />
  </Wrapper>
)
