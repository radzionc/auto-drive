import { NoAutoDriveApiKeyOnly } from '../storage/components/NoAutoDriveApiKeyOnly'
import { SetAutoDriveApiKey } from '../storage/components/SetAutoDriveApiKey'
import { ClientOnly } from '@lib/ui/base/ClientOnly'

export default () => (
  <NoAutoDriveApiKeyOnly>
    <ClientOnly>
      <SetAutoDriveApiKey />
    </ClientOnly>
  </NoAutoDriveApiKeyOnly>
)
