import { ReactChild, useMemo } from 'react'

import { Link, useLocation } from 'react-router-dom'

import styled, { css } from 'styled-components'

import { useActivePathname } from 'hooks/use-active-pathname'
import { setCategory } from 'redux/getCategorii/getCategorii'
import { useAppDispatch } from 'store/hook'
import { ILink } from 'types/isActive'
interface INavbarLink {
  to: string
  children?: ReactChild | React.ReactChild[]
  istitle?: boolean
  onClick?: () => void
  path?: any
}

const linkStyles = css`
  width: 100%;
  display: block;
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 90%;
  /* padding-bottom: 8px; */
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
`

const NavbarLink = styled(Link)<ILink>`
  ${(props) => (props.$isActive ? `${linkStyles}` : 'black')};
  border-bottom: ${(props) => (props.$isActive && props.$istitle ? '1px solid #f83600' : 'none')};

  &:hover {
    background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const LinkNavigation = ({ to, children, istitle, path }: INavbarLink) => {
  const isActive = useActivePathname(to)
  const dispatch = useAppDispatch()
  return (
    <NavbarLink
      data-test-id='navigation-books'
      onClick={() => dispatch(setCategory(path))}
      $istitle={istitle}
      $isActive={isActive}
      to={to}
    >
      {children}
    </NavbarLink>
  )
}
