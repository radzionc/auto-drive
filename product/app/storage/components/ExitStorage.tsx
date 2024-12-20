import { HStack } from '@lib/ui/css/stack'
import { useAutoDriveApiKey } from '../state/autoDriveApiKey'
import { Button } from '@lib/ui/buttons/Button'
import { LogOutIcon } from '@lib/ui/icons/LogOutIcon'

export const ExitStorage = () => {
  const [, setValue] = useAutoDriveApiKey()

  return (
    <Button kind="secondary" onClick={() => setValue(null)}>
      <HStack alignItems="center" gap={8}>
        <LogOutIcon />
        Exit
      </HStack>
    </Button>
  )
}
