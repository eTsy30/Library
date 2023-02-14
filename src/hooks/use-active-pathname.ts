import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const useActivePathname = (pathname: any) => {
  const location = useLocation()
  return useMemo(() => location.pathname === pathname || location.pathname.startsWith(pathname), [location, pathname])
}
