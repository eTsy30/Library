import { useEffect, useState } from 'react'

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResizeWindow)

    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [width])

  return width
}
