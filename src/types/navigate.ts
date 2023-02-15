import { ReactChild } from 'react'

export interface INavbarLink {
  to: string
  children: ReactChild | React.ReactChild[]
  istitle?: boolean
  onClick?: any
}
