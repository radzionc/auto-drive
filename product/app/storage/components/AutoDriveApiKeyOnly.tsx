import { ComponentWithChildrenProps } from '@lib/ui/props'

import { useEffect } from 'react'
import { useAutoDriveApiKey } from '../state/autoDriveApiKey'
import { useRouter } from 'next/router'

export const AutoDriveApiKeyOnly = ({
  children,
}: ComponentWithChildrenProps) => {
  const [value] = useAutoDriveApiKey()

  const { push } = useRouter()

  useEffect(() => {
    if (!value) {
      push('/sign-in')
    }
  }, [push, value])

  if (!value) {
    return null
  }

  return <>{children}</>
}
