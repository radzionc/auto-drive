import { ComponentWithChildrenProps } from '@lib/ui/props'

import { useEffect } from 'react'
import { useAutoDriveApiKey } from '../state/autoDriveApiKey'
import { useRouter } from 'next/router'

export const NoAutoDriveApiKeyOnly = ({
  children,
}: ComponentWithChildrenProps) => {
  const [value] = useAutoDriveApiKey()

  const { push } = useRouter()

  useEffect(() => {
    if (value) {
      push('/')
    }
  }, [push, value])

  if (value) {
    return null
  }

  return <>{children}</>
}
