import { ComponentWithChildrenProps } from '@lib/ui/props'
import { useAutoDriveApiKey } from '../state/autoDriveApiKey'
import { SetAutoDriveApiKey } from './SetAutoDriveApiKey'

export const AutoDriveApiKeyGuard = ({
  children,
}: ComponentWithChildrenProps) => {
  const [value] = useAutoDriveApiKey()

  if (!value) {
    return <SetAutoDriveApiKey />
  }

  return <>{children}</>
}
